import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';
import { Usuario } from '../models/usuario';
import { PublicadorUsuarioCreado } from '../eventos/publicadores/publicador-usuario-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/usuario/registrousuario',
  [
    body('email').isEmail().withMessage('El Email no es valido'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'La contrseña debe contener una minima de 4 caracteres y maxima de 20'
      ),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const usuarioExiste = await Usuario.findOne({ email });

    if (usuarioExiste) {
      if (!usuarioExiste!.estadoUsuario) {
        throw new SolicitudIncorrecta('Este usuario fue dado de baja');
      }
      throw new SolicitudIncorrecta('Email en uso');
    }

    const usuario = Usuario.build({ email, password });
    await usuario.save();

    const usuarioJwt = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        nombreEmpresa: usuario.nombreEmpresa,
        empresaId: usuario.empresaId,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: usuarioJwt,
    };

    new PublicadorUsuarioCreado(natsWrapper.client).publish({
      id: usuario.id,
      email: usuario.email,
      password: usuario.password,
      nombreEmpresa: usuario.nombreEmpresa,
      empresaId: usuario.empresaId,
      establecimientoId: usuario.establecimientoId,
      superUsuario: usuario.superUsuario,
      estadoUsuario: usuario.estadoUsuario,
      version: usuario.version,
    });

    res.status(201).send(usuario);
  }
);

export { router as registrarUsuarioRouter };

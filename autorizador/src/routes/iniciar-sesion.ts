import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';

import { Password } from '../services/password';
import { Usuario } from '../models/usuario';

const router = express.Router();

router.post(
  '/api/usuario/iniciarsesion',
  [
    body('email').isEmail().withMessage('El Email no es valido'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Debes proporcionar una contraseña'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const usuarioExiste = await Usuario.findOne({ email, estadoUsuario: true });
    if (!usuarioExiste) {
      throw new SolicitudIncorrecta('credenciales invalidas');
    }

    const passwordsMatch = await Password.compare(
      usuarioExiste.password,
      password
    );
    if (!passwordsMatch) {
      throw new SolicitudIncorrecta('credenciales invalidas');
    }

    // Generate JWT
    const usuarioJwt = jwt.sign(
      {
        id: usuarioExiste.id,
        email: usuarioExiste.email,
        nombreEmpresa: usuarioExiste.nombreEmpresa,
        empresaId: usuarioExiste.empresaId,
        establecimientoId: usuarioExiste.establecimientoId
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: usuarioJwt,
    };

    res.status(200).send(usuarioExiste);
  }
);

export { router as iniciarSesionRouter };

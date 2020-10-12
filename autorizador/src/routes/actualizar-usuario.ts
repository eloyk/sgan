import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validarSolicitud, ErrorNoEncontrado } from '@eloyk/comun';
import { Usuario } from '../models/usuario';

const router = express.Router();

router.post(
  '/api/usuario/:id',
  validarSolicitud,
  async (req: Request, res: Response) => {
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      throw new ErrorNoEncontrado();
    }

    usuario.set({
      superUsuario: req.body.superUsuario,
    });
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

    res.status(201).send(usuario);
  }
);

export { router as actualizarUsuarioRouter };

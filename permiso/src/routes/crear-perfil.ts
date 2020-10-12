import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { ErrorValidacionSolicitud, requireAuth, SolicitudIncorrecta, validarSolicitud } from '@eloyk/comun';
import { Perfil } from '../models/perfil';

const router = express.Router();

router.post(
  '/api/permiso/perfil',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del permiso es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    if (!req.usuarioActual){
      return new SolicitudIncorrecta(
        'Este usuario no posee una empresa asociada a este cuenta.'
      );
    }

    const perfil = Perfil.build({
      descripcion,
      usuarioCreador: req.usuarioActual.id,
      emailCreador: req.usuarioActual.email,
      empresaId: req.usuarioActual.empresaId,
    });

    await perfil!.save();

    res.status(201).send(perfil);
  }
);

export { router as crearPerfilRouter };

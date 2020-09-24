import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud, Permiso } from '@eloyk/comun';
import { natsWrapper } from '../nats-wrapper';
import { PublicadoPermisoCreado } from '../eventos/publicadores/publicador-permiso-creado';

const router = express.Router();

router.post(
  '/api/permiso',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del permiso es requerido'),
    body('tipoPermiso')
      .not()
      .isEmpty()
      .withMessage('El tipo de permiso es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, tipoPermiso } = req.body;

    const permiso = Permiso.build({
      descripcion,
      tipoPermiso,
      usuarioCreador: req.usuarioActual!.id,
      emailCreador: req.usuarioActual!.email,
    });

    await permiso!.save();

    await new PublicadoPermisoCreado(natsWrapper.client).publish({
      id: permiso.id,
      descripcion: permiso.descripcion,
      tipoPermiso: permiso.tipoPermiso,
      usuarioCreador: permiso.usuarioCreador,
      emailCreador: permiso.emailCreador,
      fechaCreacion: permiso.fechaCreacion,
      version: permiso.version,
    });

    res.status(201).send(permiso);
  }
);

export { router as crearPermisoRouter };

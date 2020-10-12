import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud } from '@eloyk/comun';
import { AsignacionUsuario } from '../models/asignacion-perfil';

const router = express.Router();

router.post(
  '/api/permiso/asignarUsuarioPermiso',
  requireAuth,
  [
    body('usuarioId').not().isEmpty().withMessage('El id del usuario es requerido'),
    body('perfilId').not().isEmpty().withMessage('El id del perfil es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { usuarioId, perfilId } = req.body;

    const asignacionUsuario = AsignacionUsuario.build({
      descripcion: req.usuarioActual!.id,
      usuario:usuarioId,
      perfil:perfilId,
    });

    await asignacionUsuario!.save();

    res.status(201).send(asignacionUsuario);
  }
);

export { router as asignarUsuarioPermisoRouter };

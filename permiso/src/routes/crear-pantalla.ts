import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud, Permiso } from '@eloyk/comun';
import { natsWrapper } from '../nats-wrapper';
import { PublicadoPermisoCreado } from '../eventos/publicadores/publicador-permiso-creado';
import { Pantalla } from '../models/pantalla';

const router = express.Router();

router.post(
  '/api/permiso/pantalla',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre de la pantalla es requerido'),
    body('tipo')
      .not()
      .isEmpty()
      .withMessage('El tipo de pantalla es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, tipo } = req.body;

    const pantalla = Pantalla.build({
      descripcion,
      tipo,
    });

    await pantalla!.save();

    res.status(201).send(pantalla);
  }
);

export { router as crearPantallaRouter };

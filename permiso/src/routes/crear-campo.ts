import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud } from '@eloyk/comun';
import { Campo } from '../models/campo';

const router = express.Router();

router.post(
  '/api/permiso/campo',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del campo es requerido'),
    body('tipo').not().isEmpty().withMessage('El tipo de campo es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, tipo } = req.body;

    const campo = Campo.build({
      descripcion,
      tipo,
    });

    await campo!.save();

    res.status(201).send(campo);
  }
);

export { router as crearCampoRouter };

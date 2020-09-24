import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validarSolicitud,
  SolicitudIncorrecta,
  Empresa,
  UnidadMedida,
} from '@eloyk/comun';
import { PublicadorUnidadMedidaCreada } from '../eventos/publicadores/publicador-unidad-medida-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/unidadmedida',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del producto es requerido'),
    body('literal').not().isEmpty().withMessage('El literal es requerido'),
    body('empresaId').not().isEmpty().withMessage('El empresaId es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, literal, empresaId } = req.body;

    const unidadmedida = UnidadMedida.build({
      descripcion,
      literal,
      empresaId,
    });
    await unidadmedida.save();

    new PublicadorUnidadMedidaCreada(natsWrapper.client).publish({
      id: unidadmedida.id,
      descripcion: unidadmedida.descripcion,
      literal: unidadmedida.literal,
      empresaId: unidadmedida.empresaId,
      version: unidadmedida.version,
    });

    res.status(201).send(unidadmedida);
  }
);

export { router as crearUnidadMedidaRouter };

import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  UnidadMedida,
} from '@eloyk/comun';
import { natsWrapper } from '../nats-wrapper';
import { PublicadorUnidadMedidaActualizada } from '../eventos/publicadores/publicador-unidad-medida-actualizado';

const router = express.Router();

router.put(
  '/api/unidadmedida/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const unidadmedida = await UnidadMedida.findById(req.params.id);

    if (!unidadmedida) {
      throw new ErrorNoEncontrado();
    }

    unidadmedida.set({
      descripcion: req.body.descripcion,
      literal: req.body.literal,
    });
    await unidadmedida.save();

    new PublicadorUnidadMedidaActualizada(natsWrapper.client).publish({
      id: unidadmedida.id,
      descripcion: unidadmedida.descripcion,
      literal: unidadmedida.literal,
      empresaId: unidadmedida.empresaId,
      version: unidadmedida.version,
    });

    res.send(unidadmedida);
  }
);

export { router as actualizarUnidadMedidaRouter };

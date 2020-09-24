import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
  ManejadorPrecio,
} from '@eloyk/comun';
import { PublicadorManejadorPrecioActualizado } from '../eventos/publicadores/publicador-manejador-precio-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/producto/manejadorprecio/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const manejadorPrecio = await ManejadorPrecio.findById(req.params.id);

    if (!manejadorPrecio) {
      throw new ErrorNoEncontrado();
    }

    manejadorPrecio.set({
      descripcion: req.body.descripcion,
      tipoPrecio: req.body.tipoPrecio,
      precio: req.body.precio,
    });

    await manejadorPrecio.save();

    new PublicadorManejadorPrecioActualizado(natsWrapper.client).publish({
      id: manejadorPrecio.id,
      unidadMedidaId: manejadorPrecio.unidadMedidaId,
      descripcion: manejadorPrecio.descripcion,
      tipoPrecio: manejadorPrecio.tipoPrecio,
      precio: manejadorPrecio.precio,
      version: manejadorPrecio.version,
    });

    res.send(manejadorPrecio);
  }
);

export { router as actualizarManejadorPrecioRouter };

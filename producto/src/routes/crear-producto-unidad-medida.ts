import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
  UnidadMedida,
} from '@eloyk/comun';
import { PublicadorProductoUnidadMedidaCreado } from '../eventos/publicadores/publicador-producto-unidad-medida-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/producto/unidadmedida',
  requireAuth,
  async (req: Request, res: Response) => {
    const producto = await Producto.findById(req.body.productoId).populate(
      'unidadMedida'
    );
    const unidadMedida = await UnidadMedida.findById(req.body.unidadMedidaId);

    if (!producto) {
      throw new ErrorNoEncontrado();
    }

    if (producto.usuarioIdAlta !== req.usuarioActual!.id) {
      throw new ErrorAutorizacion();
    }

    if (!unidadMedida) {
      throw new ErrorNoEncontrado();
    }

    producto.unidadMedida!.push(unidadMedida);

    await producto.save();

    new PublicadorProductoUnidadMedidaCreado(natsWrapper.client).publish({
      id: producto.id,
      descripcion: producto.descripcion,
      tipoProducto: producto.tipoProducto,
      empresaId: producto.empresaId,
      unidadMedida: unidadMedida,
      version: producto.version,
    });

    res.status(201).send(producto);
  }
);

export { router as crearProductoUnidadMedidaRouter };

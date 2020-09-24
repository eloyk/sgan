import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
  UnidadMedida,
} from '@eloyk/comun';
import { PublicadorProductoActualizado } from '../eventos/publicadores/publicador-producto-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/producto/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const producto = await Producto.findById(req.params.id).populate(
      'unidadMedida'
    );

    if (!producto) {
      throw new ErrorNoEncontrado();
    }

    if (producto.usuarioIdAlta !== req.usuarioActual!.id) {
      throw new ErrorAutorizacion();
    }

    producto.set({
      codigoBarra: req.body.codigoBarra,
      urlImagen: req.body.urlImagen,
    });
    await producto.save();

    new PublicadorProductoActualizado(natsWrapper.client).publish({
      id: producto.id,
      descripcion: producto.descripcion,
      codigoBarra: producto.codigoBarra,
      tipoProducto: producto.tipoProducto,
      urlImagen: producto.urlImagen,
      empresaId: producto.empresaId,
      version: producto.version,
    });

    res.send(producto);
  }
);

export { router as actualizarProductoRouter };

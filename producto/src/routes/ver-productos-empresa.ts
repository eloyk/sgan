import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
} from '@eloyk/comun';

const router = express.Router();

router.get(
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

    res.send(producto);
  }
);

export { router as verProductoRouter };

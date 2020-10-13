import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
  Venta,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/venta/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const venta = await Venta.findById(req.params.id)    
    .populate('producto')
    .populate('empresa')
    .populate('establecimiento')
    .populate('cliente');

    if (!venta) {
      throw new ErrorNoEncontrado();
    }

    if (venta.usuarioIdAlta !== req.usuarioActual!.id) {
      throw new ErrorAutorizacion();
    }

    res.send(venta);
  }
);

export { router as verProductoRouter };

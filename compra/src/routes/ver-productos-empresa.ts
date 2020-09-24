import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
  Compra,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/producto/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const compra = Compra.findById(req.params.compraId)
      .populate('producto')
      .populate('empresa')
      .populate('proveedor');

    if (!compra) {
      throw new ErrorNoEncontrado();
    }

    res.send(compra);
  }
);

export { router as verCompraRouter };

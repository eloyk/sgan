import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Producto,
} from '@eloyk/comun';
import { FacturaCompra } from '../models/factura-compra';

const router = express.Router();

router.get(
  '/api/factura/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const factura = await FacturaCompra.findById(req.params.id).populate(
      'compra'
    );

    if (!factura) {
      throw new ErrorNoEncontrado();
    }

    res.send(factura);
  }
);

export { router as verFacturaRouter };

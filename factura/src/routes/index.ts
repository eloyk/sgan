import express, { Request, Response } from 'express';
import { requireAuth } from '@eloyk/comun';
import { FacturaCompra } from '../models/factura-compra';

const router = express.Router();

router.get('/api/factura', requireAuth, async (req: Request, res: Response) => {
  const factura = await FacturaCompra.find().populate('compra');

  res.send(factura);
});

export { router as indexFacturaRouter };

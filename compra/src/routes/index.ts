import express, { Request, Response } from 'express';
import { requireAuth, Compra } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/compra', 
  requireAuth, 
  async (req: Request, res: Response) => {
  const compra = await Compra.find()
    .populate('producto')
    .populate('empresa')
    .populate('establecimiento')
    .populate('proveedor');

  res.send(compra);
});

export { router as indexCompraRouter };

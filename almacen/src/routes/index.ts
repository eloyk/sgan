import express, { Request, Response } from 'express';
import { requireAuth } from '@eloyk/comun';
import { Almacen } from '../models/almacen';

const router = express.Router();

router.get(
  '/api/almacen',
  requireAuth,
  async (req: Request, res: Response) => {
    const almacen = await Almacen.find();

    res.send(almacen);
  }
);

export { router as indexAlmacenRouter };

import express, { Request, Response } from 'express';
import { requireAuth, Almacen } from '@eloyk/comun';

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

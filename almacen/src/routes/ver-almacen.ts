import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
} from '@eloyk/comun';
import { Almacen } from '../models/almacen';

const router = express.Router();

router.get(
  '/api/almacen/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const almacen = await Almacen.findById(req.params.id);

    if (!almacen) {
      throw new ErrorNoEncontrado();
    }

    res.send(almacen);
  }
);

export { router as verAlmacenRouter };

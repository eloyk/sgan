import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  Almacen
} from '@eloyk/comun';

const router = express.Router();

router.put(
  '/api/almacen/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const almacen = await Almacen.findById(req.params.id);

    if (!almacen) {
      throw new ErrorNoEncontrado();
    }

    almacen.set({
      descripcion: req.body.descripcion,
    });

    await almacen.save();

    res.send(almacen);
  }
);

export { router as actualizarAlmacenRouter };

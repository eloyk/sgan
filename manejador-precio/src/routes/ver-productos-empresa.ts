import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  ManejadorPrecio,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/producto/manejadorprecio/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const manejadorPrecio = await ManejadorPrecio.findById(req.params.id);

    if (!manejadorPrecio) {
      throw new ErrorNoEncontrado();
    }

    res.send(manejadorPrecio);
  }
);

export { router as verManejadorPrecioRouter };

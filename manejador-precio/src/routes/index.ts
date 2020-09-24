import express, { Request, Response } from 'express';
import { requireAuth, ManejadorPrecio, Producto } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/producto/manejadorprecio',
  requireAuth,
  async (req: Request, res: Response) => {
    const manejadorprecio = await Producto.find()
      .populate('manejadorPrecio')
      .populate('unidadMedida');

    res.send(manejadorprecio);
  }
);

export { router as indexManejadorPrecioRouter };

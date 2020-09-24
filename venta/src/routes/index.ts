import express, { Request, Response } from 'express';
import { requireAuth, Producto } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/producto',
  requireAuth,
  async (req: Request, res: Response) => {
    const producto = await Producto.find()
      .populate('unidadMedida')
      .populate('manejadorPrecio');

    res.send(producto);
  }
);

export { router as indexProdutoRouter };

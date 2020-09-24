import express, { Request, Response } from 'express';
import { requireAuth } from '@eloyk/comun';
import { Categoria } from '../models/categoria';

const router = express.Router();

router.get(
  '/api/categoria/producto',
  requireAuth,
  async (req: Request, res: Response) => {
    const categoria = await Categoria.find().populate('producto');

    res.send(categoria);
  }
);

export { router as indexCategoriaRouter };

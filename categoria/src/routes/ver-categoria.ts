import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
} from '@eloyk/comun';
import { Categoria } from '../models/categoria';

const router = express.Router();

router.get(
  '/api/categoria/producto/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const categoria = await Categoria.findById(req.params.id).populate(
      'producto'
    );

    if (!categoria) {
      throw new ErrorNoEncontrado();
    }

    res.send(categoria);
  }
);

export { router as verCategoriaRouter };

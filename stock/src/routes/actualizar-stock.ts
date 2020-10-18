import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
} from '@eloyk/comun';
//import { Categoria } from '../models/stock';

const router = express.Router();

router.put(
  '/api/stock/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    //const categoria = await Categoria.findById(req.params.id);
//
    //if (!categoria) {
    //  throw new ErrorNoEncontrado();
    //}
//
    //categoria.set({
    //  descripcion: req.body.descripcion,
    //});
//
    //await categoria.save();

    res.send({ });
  }
);

export { router as actualizarStockRouter };

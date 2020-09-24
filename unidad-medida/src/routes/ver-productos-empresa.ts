import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  UnidadMedida,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/unidadmedida/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const unidadmedida = await UnidadMedida.findById(req.params.id);

    if (!unidadmedida) {
      throw new ErrorNoEncontrado();
    }

    res.send(unidadmedida);
  }
);

export { router as verUnidadMedidaRouter };

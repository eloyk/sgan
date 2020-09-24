import express, { Request, Response } from 'express';
import { requireAuth, UnidadMedida } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/unidadmedida',
  requireAuth,
  async (req: Request, res: Response) => {
    const unidadMedida = await UnidadMedida.find();

    res.send(unidadMedida);
  }
);

export { router as indexUnidadMedidaRouter };

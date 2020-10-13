import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  Establecimiento
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/establecimiento/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const establecimiento = await Establecimiento.findById(req.params.id);

    if (!establecimiento) {
      throw new ErrorNoEncontrado();
    }

    res.send(establecimiento);
  }
);

export { router as verEstablecimientoRouter };

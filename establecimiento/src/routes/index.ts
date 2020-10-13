import express, { Request, Response } from 'express';
import { requireAuth, Establecimiento } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/establecimiento',
  requireAuth,
  async (req: Request, res: Response) => {
    const establecimiento = await Establecimiento.find();

    res.send(establecimiento);
  }
);

export { router as indexEstablecimientoRouter };

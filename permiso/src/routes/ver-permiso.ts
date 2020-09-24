import express, { Request, Response } from 'express';
import { ErrorNoEncontrado, requireAuth, Permiso } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/permiso/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const permiso = await Permiso.findById(req.params.id);

    if (!permiso) {
      throw new ErrorNoEncontrado();
    }

    res.send(permiso);
  }
);

export { router as verPermisoRouter };

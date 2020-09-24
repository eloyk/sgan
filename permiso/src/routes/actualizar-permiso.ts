import express, { Request, Response } from 'express';
import { ErrorNoEncontrado, requireAuth, Permiso } from '@eloyk/comun';

const router = express.Router();

router.put(
  '/api/permiso/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const permiso = await Permiso.findById(req.params.id);

    if (!permiso) {
      throw new ErrorNoEncontrado();
    }

    permiso.set({
      descripcion: req.body.descripcion,
    });

    await permiso.save();

    res.send(permiso);
  }
);

export { router as actualizarPermisoRouter };

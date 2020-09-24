import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Proveedor,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/empresa/proveedor/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const proveedor = await Proveedor.findById(req.params.id);

    if (!proveedor) {
      throw new ErrorNoEncontrado();
    }

    res.send(proveedor);
  }
);

export { router as verProveedorRouter };

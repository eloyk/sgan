import express, { Request, Response } from 'express';
import { requireAuth, Proveedor } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/empresa/proveedor',
  requireAuth,
  async (req: Request, res: Response) => {
    const proveedor = await Proveedor.find();

    res.send(proveedor);
  }
);

export { router as indexProveedorRouter };

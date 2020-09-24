import express, { Request, Response } from 'express';
import { requireAuth, Permiso } from '@eloyk/comun';

const router = express.Router();

router.get('/api/permiso', requireAuth, async (req: Request, res: Response) => {
  const permiso = await Permiso.find();

  res.send(permiso);
});

export { router as indexPermisoRouter };

import express, { Request, Response } from 'express';
import { requireAuth, Permiso } from '@eloyk/comun';
import { Pantalla } from '../models/pantalla';

const router = express.Router();

router.get('/api/permiso', requireAuth, async (req: Request, res: Response) => {
  const pantalla = await Pantalla.find().populate('campo');

  res.send(pantalla);
});

export { router as indexPermisoRouter };

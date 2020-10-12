import express, { Request, Response } from 'express';
import { requireAuth } from '@eloyk/comun';
import { Usuario } from '../models/usuario';

const router = express.Router();

router.get('/api/permiso', requireAuth, async (req: Request, res: Response) => {
  const usuario = await Usuario.find();

  res.send(usuario);
});

export { router as indexusuario };

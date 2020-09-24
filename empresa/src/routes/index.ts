import express, { Request, Response } from 'express';
import { requireAuth, Empresa } from '@eloyk/comun';

const router = express.Router();

router.get('/api/empresa', requireAuth, async (req: Request, res: Response) => {
  const empresa = await Empresa.find();

  res.send(empresa);
});

export { router as indexEmpresaRouter };

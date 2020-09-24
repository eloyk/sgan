import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Empresa,
} from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/empresa/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const empresa = await Empresa.findById(req.params.id);

    if (!empresa) {
      throw new ErrorNoEncontrado();
    }

    if (empresa.usuarioIdAlta !== req.usuarioActual!.id) {
      throw new ErrorAutorizacion();
    }

    res.send(empresa);
  }
);

export { router as verEmpresaRouter };

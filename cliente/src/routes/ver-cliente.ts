import express, { Request, Response } from 'express';
import { ErrorNoEncontrado, requireAuth, Cliente } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/empresa/cliente/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      throw new ErrorNoEncontrado();
    }

    res.send(cliente);
  }
);

export { router as verClienteRouter };

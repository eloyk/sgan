import express, { Request, Response } from 'express';
import { requireAuth, Cliente } from '@eloyk/comun';

const router = express.Router();

router.get(
  '/api/empresa/cliente',
  requireAuth,
  async (req: Request, res: Response) => {
    const cliente = await Cliente.find();

    // cliente.forEach(client => {
    //   empresa = Empresa.findOne({_id: client.empresaId})
    // });

    //const cliente = await Cliente.aggregate([
    //  {
    //    $lookup: {
    //      from: 'cliente.empresas',
    //      localField: 'empresaId',
    //      foreignField: '_id',
    //      as: 'clienteDetalle',
    //    },
    //  },
    //]);

    res.send(cliente);
  }
);

export { router as indexClienteRouter };

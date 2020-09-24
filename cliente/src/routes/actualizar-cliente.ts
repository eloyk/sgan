import express, { Request, Response } from 'express';
import { ErrorNoEncontrado, requireAuth, Cliente } from '@eloyk/comun';
import { PublicadorClienteActualizado } from '../eventos/publicadores/publicador-cliente-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/empresa/cliente/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      throw new ErrorNoEncontrado();
    }

    cliente.set({
      nombreEmpresa: req.body.nombreEmpresa,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      correoElectronico: req.body.correoElectronico,
      tipoDocumento: req.body.tipoDocumento,
      numeroDocumento: req.body.numeroDocumento,
    });

    await cliente.save();

    await new PublicadorClienteActualizado(natsWrapper.client).publish({
      id: cliente.id,
      nombreEmpresa: cliente.nombreEmpresa,
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      telefono: cliente.telefono,
      direccion: cliente.direccion!,
      empresaId: cliente.empresaId,
      correoElectronico: cliente.correoElectronico,
      tipoDocumento: cliente.tipoDocumento!,
      numeroDocumento: cliente.numeroDocumento!,
      usuarioIdAlta: cliente.usuarioIdAlta,
      emailUsuarioAlta: cliente.emailUsuarioAlta,
      version: cliente.version,
    });

    res.send(cliente);
  }
);

export { router as actualizarClienteRouter };

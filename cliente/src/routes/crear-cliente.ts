import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud, Cliente } from '@eloyk/comun';
import { PublicadorClienteCreado } from '../eventos/publicadores/publicador-cliente-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/empresa/cliente',
  requireAuth,
  [body('nombres').not().isEmpty().withMessage('El nombre es requerido')],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const {
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      empresaId,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
    } = req.body;

    const cliente = Cliente.build({
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      empresaId,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email,
    });

    await cliente!.save();

    await new PublicadorClienteCreado(natsWrapper.client).publish({
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

    res.status(201).send(cliente);
  }
);

export { router as crearClienteRouter };

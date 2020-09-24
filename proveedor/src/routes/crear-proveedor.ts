import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud, Proveedor } from '@eloyk/comun';
import { natsWrapper } from '../nats-wrapper';
import { PublicadorProveedorCreado } from '../eventos/publicadores/publicador-proveedor-creado';

const router = express.Router();

router.post(
  '/api/empresa/proveedor',
  requireAuth,
  [
    body('nombreEmpresa')
      .not()
      .isEmpty()
      .withMessage('El nombre de la empresa es requerido'),
  ],
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

    const proveedor = Proveedor.build({
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

    await proveedor!.save();

    new PublicadorProveedorCreado(natsWrapper.client).publish({
      id: proveedor.id,
      nombreEmpresa: proveedor.nombreEmpresa,
      nombres: proveedor.nombres,
      apellidos: proveedor.apellidos,
      telefono: proveedor.telefono,
      direccion: proveedor.direccion,
      empresaId: proveedor.empresaId,
      correoElectronico: proveedor.correoElectronico,
      tipoDocumento: proveedor.tipoDocumento,
      numeroDocumento: proveedor.numeroDocumento,
      usuarioIdAlta: proveedor.usuarioIdAlta,
      emailUsuarioAlta: proveedor.emailUsuarioAlta,
      version: proveedor.version,
    });

    res.status(201).send(proveedor);
  }
);

export { router as crearProveedorRouter };

import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Proveedor,
} from '@eloyk/comun';
import { PublicadorProveedorActualizado } from '../eventos/publicadores/publicador-proveedor-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/empresa/proveedor/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const proveedor = await Proveedor.findById(req.params.id);

    if (!proveedor) {
      throw new ErrorNoEncontrado();
    }

    proveedor.set({
      nombreEmpresa: req.body.nombreEmpresa,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      correoElectronico: req.body.correoElectronico,
      tipoDocumento: req.body.tipoDocumento,
      numeroDocumento: req.body.numeroDocumento,
    });

    await proveedor.save();

    new PublicadorProveedorActualizado(natsWrapper.client).publish({
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
      version: proveedor.version,
    });

    res.send(proveedor);
  }
);

export { router as actualizarProveedorRouter };

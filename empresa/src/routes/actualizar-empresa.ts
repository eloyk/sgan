import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  Empresa,
} from '@eloyk/comun';
import { PublicadorEmpresaActualizada } from '../eventos/publicadores/publicador-empresa-actualizada';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
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

    empresa.set({
      nombreEmpresa: req.body.nombreEmpresa,
      clasifEmpresa: req.body.clasifEmpresa,
      tipoEmpresa: req.body.tipoEmpresa,
      fundador: req.body.fundador,
      telefono: req.body.telefono,
      emailEmpresa: req.body.emailEmpresa,
      RNC: req.body.RNC,
    });
    await empresa.save();
    new PublicadorEmpresaActualizada(natsWrapper.client).publish({
      id: empresa.id,
      nombreEmpresa: empresa.nombreEmpresa,
      clasifEmpresa: empresa.clasifEmpresa,
      tipoEmpresa: empresa.tipoEmpresa,
      fundador: empresa.fundador,
      telefono: empresa.telefono,
      emailEmpresa: empresa.emailEmpresa,
      RNC: empresa.RNC,
      usuarioIdAlta: empresa.usuarioIdAlta,
      emailUsuarioAlta: empresa.emailEmpresa,
      version: empresa.version,
    });

    res.send(empresa);
  }
);

export { router as actualizarEmpresaRouter };

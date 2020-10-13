import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
  Establecimiento
} from '@eloyk/comun';
import { PublicadorEstablecimientoActualizado } from '../eventos/publicadores/publicador-establecimiento-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/establecimiento/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const establecimiento = await Establecimiento.findById(req.params.id);

    if (!establecimiento) {
      throw new ErrorNoEncontrado();
    }

    establecimiento.set({
      descripcion: req.body.descripcion,
      subNombre:req.body.descripcion,
      direccion:req.body.descripcion,
    });

    await establecimiento.save();

    await new PublicadorEstablecimientoActualizado(natsWrapper.client).publish({
      id: establecimiento!.id,
      descripcion: establecimiento!.descripcion,
      subNombre: establecimiento!.subNombre,
      empresaId: establecimiento.empresaId,
      direccion: establecimiento!.direccion!,
      version: establecimiento!.version,
    });

    res.send(establecimiento);
  }
);

export { router as actualizarEstablecimientoRouter };

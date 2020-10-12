import express, { Request, Response } from 'express';
import { ErrorNoEncontrado, requireAuth } from '@eloyk/comun';
import { Pantalla } from '../models/pantalla';
import { Campo } from '../models/campo';

const router = express.Router();

router.post(
  '/api/permiso/asociacionpc',
  requireAuth,
  async (req: Request, res: Response) => {
    const pantalla = await Pantalla.findById(req.body.pantallaId).populate(
      'unidadMedida'
    );
    const campo = await Campo.findById(req.body.campoId);

    if (!pantalla) {
      throw new ErrorNoEncontrado();
    }

    if (!campo) {
      throw new ErrorNoEncontrado();
    }

    pantalla.campo!.push(campo);

    await pantalla.save();

    res.status(201).send(pantalla);
  }
);

export { router as crearPantallaCampoRouter };

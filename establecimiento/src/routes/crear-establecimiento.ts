import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Establecimiento, requireAuth, validarSolicitud } from '@eloyk/comun';
import jwt from 'jsonwebtoken';
import { PublicadorEstablecimientoCreado } from '../eventos/publicadores/publicador-establecimiento-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/establecimiento/crear',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del establecimiento es requerido'),
      body('subNombre')
      .not()
      .isEmpty()
      .withMessage('El subNombre del establecimiento es requerido'),
      body('direccion')
      .not()
      .isEmpty()
      .withMessage('La direccion del establecimiento es requerida'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, subNombre, direccion } = req.body;

    const establecimiento = Establecimiento.build({
      descripcion,
      subNombre,
      empresaId: req.usuarioActual!.empresaId,
      direccion
    });

    await establecimiento!.save();
    
    await new PublicadorEstablecimientoCreado(natsWrapper.client).publish({
      id: establecimiento!.id,
      descripcion: establecimiento!.descripcion,
      subNombre: establecimiento!.subNombre,
      empresaId: establecimiento.empresaId,
      direccion: establecimiento!.direccion!,
      version: establecimiento!.version,
    });

    req.session = null;

    // Generate JWT
    const usuarioJwt = jwt.sign(
      {
        id: req.usuarioActual!.id,
        email: req.usuarioActual!.email,
        nombreEmpresa: req.usuarioActual!.nombreEmpresa,
        empresaId: establecimiento.empresaId,
        establecimientoId: establecimiento!.id
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: usuarioJwt,
    };

    res.status(201).send(establecimiento); 
  }
);

export { router as crearEstablecimientoRouter };

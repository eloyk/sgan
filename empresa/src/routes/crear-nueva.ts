import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud, Empresa } from '@eloyk/comun';
import jwt from 'jsonwebtoken';
import { PublicadorEmpresaCreada } from '../eventos/publicadores/publicador-empresa-creada';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/empresa',
  requireAuth,
  [
    body('nombreEmpresa')
      .not()
      .isEmpty()
      .withMessage('El nombre de la empresa es requerido'),
    body('clasifEmpresa')
      .not()
      .isEmpty()
      .withMessage('La clasificacion de la empresa es requerido'),
    body('tipoEmpresa')
      .not()
      .isEmpty()
      .withMessage('El tipo de la empresa es requerido'),
    body('fundador')
      .not()
      .isEmpty()
      .withMessage('El nombre del dueño y/o encargado es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const {
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
    } = req.body;

    const empresa = Empresa.build({
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email,
      fechaAlta: new Date(),
    });
    await empresa.save();

    new PublicadorEmpresaCreada(natsWrapper.client).publish({
      id: empresa.id,
      nombreEmpresa: empresa.nombreEmpresa,
      clasifEmpresa: empresa.clasifEmpresa,
      tipoEmpresa: empresa.tipoEmpresa,
      fundador: empresa.fundador,
      telefono: empresa.telefono,
      emailEmpresa: empresa.emailEmpresa,
      RNC: empresa.RNC,
      usuarioIdAlta: empresa.usuarioIdAlta,
      emailUsuarioAlta: empresa.emailUsuarioAlta,
      version: empresa.version,
    });

    req.session = null;

    // Generate JWT
    const usuarioJwt = jwt.sign(
      {
        id: empresa.usuarioIdAlta,
        email: empresa.emailUsuarioAlta,
        nombreEmpresa: empresa.nombreEmpresa,
        empresaId: empresa.id,
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: usuarioJwt,
    };

    res.status(201).send(empresa);
  }
);

export { router as crearEmpresaRouter };

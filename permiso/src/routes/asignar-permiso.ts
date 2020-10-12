import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud } from '@eloyk/comun';
import { PermisoCampo } from '../models/permiso-campo';
import { PermisoPantalla } from '../models/permiso-pantalla';

const router = express.Router();

router.post(
  '/api/permiso/asignarPermiso',
  requireAuth,
  [
    body('perfilId').not().isEmpty().withMessage('El id del perfil es requerido'),
    body('pantallaId').not().isEmpty().withMessage('El id de la pantala es requerido'),
    body('campoId').not().isEmpty().withMessage('El id del campo es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { perfilId, pantallaId, campoId, verCampo, modificarCampo, verpantalla } = req.body;

    const permisoCampo = PermisoCampo.build({
      campo:campoId,
      perfil:perfilId,
      ver: verCampo,
      modificar:modificarCampo
    });

    await permisoCampo!.save();
    
    const permisoPantalla = PermisoPantalla.build({
      pantalla:pantallaId,
      permisoCampo:permisoCampo,
      perfil:perfilId,
      ver: verpantalla,
    });

    await permisoPantalla!.save();

    res.status(201).send(permisoPantalla);
  }
);

export { router as asignarPermisoRouter };

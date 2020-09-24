import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validarSolicitud } from '@eloyk/comun';
import { ProductoCategoria } from '../models/producto-categoria';
import { Categoria } from '../models/categoria';

const router = express.Router();

router.post(
  '/api/categoria/producto',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre de la categoria es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, productoId } = req.body;

    const producto = await ProductoCategoria.findById(productoId);

    const categoria = Categoria.build({
      descripcion,
      producto: [producto!],
    });

    await categoria!.save();

    res.status(201).send(categoria.populate('producto'));
  }
);

export { router as crearCategoriaRouter };

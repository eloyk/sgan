import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validarSolicitud,
  ManejadorPrecio,
  Producto,
} from '@eloyk/comun';
import { PublicadorManejadorPrecioCreado } from '../eventos/publicadores/publicador-manejador-precio-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/producto/manejadorprecio',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del producto es requerido'),
    body('tipoPrecio')
      .not()
      .isEmpty()
      .withMessage('El tipo de precio es requerido'),
    body('precio').not().isEmpty().withMessage('El precio es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const {
      descripcion,
      tipoPrecio,
      precio,
      literalUnidadMedida,
      productoId,
    } = req.body;

    const producto = await Producto.findById(productoId).populate(
      'unidadMedida'
    );
    let unidadMedidaId = '';
    producto!.unidadMedida.forEach((unidadM: any) => {
      if (unidadM.literal === literalUnidadMedida) {
        unidadMedidaId = unidadM.id;
      }
    });

    const manejadorPrecio = ManejadorPrecio.build({
      unidadMedidaId,
      descripcion,
      tipoPrecio,
      precio,
    });

    await manejadorPrecio.save();

    producto!.manejadorPrecio!.push(manejadorPrecio);

    await producto!.save();

    new PublicadorManejadorPrecioCreado(natsWrapper.client).publish({
      id: manejadorPrecio.id,
      productoId: producto!.id,
      unidadMedidaId: manejadorPrecio.unidadMedidaId,
      descripcion: manejadorPrecio.descripcion,
      tipoPrecio: manejadorPrecio.tipoPrecio,
      precio: manejadorPrecio.precio,
      version: producto!.version,
    });

    res.status(201).send(producto);
  }
);

export { router as crearManejadorPrecioRouter };

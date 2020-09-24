import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validarSolicitud,
  SolicitudIncorrecta,
  Empresa,
  Producto,
  UnidadMedida,
} from '@eloyk/comun';
import { PublicadorProductoCreado } from '../eventos/publicadores/publicador-producto-creado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/producto',
  requireAuth,
  [
    body('descripcion')
      .not()
      .isEmpty()
      .withMessage('El nombre del producto es requerido'),
    body('tipoProducto')
      .not()
      .isEmpty()
      .withMessage('El tipo de producto es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { descripcion, codigoBarra, tipoProducto, urlImagen } = req.body;

    const empresa = await Empresa.findOne({
      usuarioIdAlta: req.usuarioActual!.id,
    });
    const unidadMedida = await UnidadMedida.findOne({
      empresaId: empresa!.id,
      descripcion: 'Seleccione un una unidad de medida',
    });

    if (!empresa) {
      new SolicitudIncorrecta(
        'Este usuario no posee una empresa asociada a este cuenta.'
      );
    }

    if (!unidadMedida) {
      new SolicitudIncorrecta(
        'Este usuario no posee una empresa asociada a este cuenta.'
      );
    }

    const producto = Producto.build({
      descripcion,
      codigoBarra,
      tipoProducto,
      urlImagen,
      empresaId: empresa!.id,
      unidadMedida: [unidadMedida!],
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email,
    });
    await producto.save();

    new PublicadorProductoCreado(natsWrapper.client).publish({
      id: producto.id,
      descripcion: producto.descripcion,
      codigoBarra: producto.codigoBarra,
      tipoProducto: producto.tipoProducto,
      urlImagen: producto.urlImagen,
      empresaId: producto.empresaId,
      usuarioIdAlta: producto.usuarioIdAlta,
      emailUsuarioAlta: producto.emailUsuarioAlta,
      //recordar modificar evento crear producto para que este no incluya los los campos de unidades de medida
      unidadMedida: unidadMedida!,
      version: producto.version,
    });

    res.status(201).send(producto);
  }
);

export { router as crearProductoRouter };

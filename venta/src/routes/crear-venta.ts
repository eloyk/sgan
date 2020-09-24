import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  ErrorNoEncontrado,
  requireAuth,
  validarSolicitud,
  EstadoCompra,
  ProductoCompra,
  Venta,
} from '@eloyk/comun';
import { PublicadorVentaCreada } from '../eventos/publicadores/publicador-venta-creada';
import { natsWrapper } from '../nats-wrapper';
import { VentaTMP } from '../models/ventaTMP';
import { ProductoCompraTMP } from '../models/producto-compraTMP';

const router = express.Router();

router.post(
  '/api/venta',
  requireAuth,
  [
    body('ventaId')
      .not()
      .isEmpty()
      .withMessage('El id de la venta es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { ventaId } = req.body;

    const ventaTMP = await VentaTMP.findById(ventaId).populate(
      'productoCompraTMP'
    );

    if (!ventaTMP) {
      throw new ErrorNoEncontrado();
    }

    const venta = Venta.build({
      id: ventaTMP.id,
      empresa: ventaTMP.empresa,
      cliente: ventaTMP.cliente,
      estadoCompra: EstadoCompra.EsperandoConfimacion,
      producto: ventaTMP.productoCompraTMP,
      totalVenta: ventaTMP.totalVenta!,
      cantidadProducto: ventaTMP.contadorProducto,
      expiracion: ventaTMP.expiracion,
      usuarioIdAlta: ventaTMP.usuarioIdAlta,
      emailUsuarioAlta: ventaTMP.emailUsuarioAlta,
    });

    for (let buscarVenta in ventaTMP!.productoCompraTMP) {
      let productoEncontrado = ventaTMP!.productoCompraTMP[buscarVenta];
      const productoCompra = ProductoCompra.build({
        id: productoEncontrado.id,
        productoId: productoEncontrado.productoId,
        descripcionProducto: productoEncontrado.descripcionProducto,
        tipoProducto: productoEncontrado.tipoProducto,
        unidadMedidaId: productoEncontrado.unidadMedidaId,
        literal: productoEncontrado.literal,
        manejadorPrecioId: productoEncontrado.manejadorPrecioId,
        descripcionManejadorPrecio:
          productoEncontrado.descripcionManejadorPrecio,
        tipoPrecio: productoEncontrado.tipoPrecio,
        precioProducto: productoEncontrado.precioProducto,
        cantidadProducto: productoEncontrado.cantidadProducto,
        sumatoriaPrecioProducto: productoEncontrado.sumatoriaPrecioProducto,
        empresaId: productoEncontrado.empresaId,
        usuarioIdAlta: productoEncontrado.usuarioIdAlta,
        emailUsuarioAlta: productoEncontrado.emailUsuarioAlta,
      });
      await productoCompra.save();

      ProductoCompraTMP.findOne({ _id: productoEncontrado.id }).remove().exec();
    }

    VentaTMP.findOne({ _id: ventaTMP!.id }).remove().exec();

    await venta.save();

    await new PublicadorVentaCreada(natsWrapper.client).publish({
      id: venta.id,
      producto: venta.producto,
      empresa: venta.empresa,
      cliente: venta.cliente,
      estadoCompra: venta.estadoCompra,
      totalVenta: venta.totalVenta,
      cantidadProducto: venta.cantidadProducto,
      expiracion: venta.expiracion,
      version: venta.version,
    });

    res.send(
      venta.populate('producto').populate('empresa').populate('cliente')
    );
  }
);

export { router as crearClienteRouter };

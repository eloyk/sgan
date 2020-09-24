import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  ErrorNoEncontrado,
  requireAuth,
  ErrorAutorizacion,
  validarSolicitud,
  Compra,
  EstadoCompra,
  ProductoCompra,
} from '@eloyk/comun';
import { PublicadorCompraCreada } from '../eventos/publicadores/publicador-compra-creada';
import { natsWrapper } from '../nats-wrapper';
import { FacturaCompra } from '../models/factura-compra';
import { PublicadoProductoCompraCreado } from '../eventos/publicadores/publicador-producto-compra-creado';

const router = express.Router();

router.post(
  '/api/factura',
  requireAuth,
  [
    body('compraId')
      .not()
      .isEmpty()
      .withMessage('El id de la compra es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const { compraId } = req.body;

    //const compraTMP = await CompraTMP.findById(compraId)
    //  .populate('productoCompraTMP')
    //  .populate('empresa')
    //  .populate('proveedor');
    //
    //if (!compraTMP) {
    //  return new ErrorNoEncontrado();
    //}
    //
    //const compra = Compra.build({
    //  id: compraTMP.id,
    //  empresa: compraTMP.empresa,
    //  proveedor: compraTMP.proveedor,
    //  estadoCompra: EstadoCompra.EsperandoConfimacion,
    //  producto: compraTMP.productoCompraTMP,
    //  totalCompra: compraTMP.totalCompra!,
    //  cantidadProducto: compraTMP.contadorProducto,
    //  expiracion: compraTMP.expiracion,
    //  usuarioIdAlta: compraTMP.usuarioIdAlta,
    //  emailUsuarioAlta: compraTMP.emailUsuarioAlta,
    //});
    //
    //for (let buscarCompra in compraTMP!.productoCompraTMP) {
    //  let buscarProducto = compraTMP!.productoCompraTMP[buscarCompra];
    //  const productoCompra = ProductoCompra.build({
    //    id: buscarProducto.id,
    //    productoId: buscarProducto.productoId,
    //    descripcionProducto: buscarProducto.descripcionProducto,
    //    tipoProducto: buscarProducto.tipoProducto,
    //    unidadMedidaId: buscarProducto.unidadMedidaId,
    //    literal: buscarProducto.literal,
    //    manejadorPrecioId: buscarProducto.manejadorPrecioId,
    //    descripcionManejadorPrecio: buscarProducto.descripcionManejadorPrecio,
    //    tipoPrecio: buscarProducto.tipoPrecio,
    //    precioProducto: buscarProducto.precioProducto,
    //    cantidadProducto: buscarProducto.cantidadProducto,
    //    sumatoriaPrecioProducto: buscarProducto.sumatoriaPrecioProducto,
    //    empresaId: buscarProducto.empresaId,
    //    usuarioIdAlta: buscarProducto.usuarioIdAlta,
    //    emailUsuarioAlta: buscarProducto.emailUsuarioAlta,
    //  });
    //  await productoCompra.save();
    //
    //  ProductoCompraTMP.findOne({ _id: buscarProducto.id }).remove().exec();
    //}
    //
    //CompraTMP.findOne({ _id: compraTMP!.id }).remove().exec();
    //
    //await compra.save();
    //
    //await new PublicadorCompraCreada(natsWrapper.client).publish({
    //  id: compra.id,
    //  producto: compra.producto,
    //  empresa: compra.empresa,
    //  proveedor: compra.proveedor,
    //  estadoCompra: compra.estadoCompra,
    //  totalCompra: compra.totalCompra,
    //  cantidadProducto: compra.cantidadProducto,
    //  expiracion: compra.expiracion,
    //  version: compra.version,
    //});
    //
    //await new PublicadoProductoCompraCreado(natsWrapper.client).publish({
    //  producto: compra.producto,
    //});
    //
    //compra.set({
    //  estadoCompra: EstadoCompra.Completa,
    //});
    //
    //await compra.save();

    res.send({});
  }
);

export { router as crearFacturaRouter };

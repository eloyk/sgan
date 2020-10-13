import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validarSolicitud,
  SolicitudIncorrecta,
  Empresa,
  Producto,
  UnidadMedida,
  ManejadorPrecio,
  EstadoCompra,
  Cliente,
  Establecimiento,
} from '@eloyk/comun';
import { VentaTMP } from '../models/ventaTMP';
import { ProductoCompraTMP } from '../models/producto-compraTMP';
import { natsWrapper } from '../nats-wrapper';
import { PublicadorPreVentaCreada } from '../eventos/publicadores/publicador-pre-venta-creada';
import { PublicadoProductoCompraCreado } from '../eventos/publicadores/publicador-producto-compra-creado';
import { PublicadoProductoCompraActualizado } from '../eventos/publicadores/publicador-producto-compra-actualizado';

const router = express.Router();

router.post(
  '/api/venta/preventa',
  requireAuth,
  [
    body('empresaId')
      .not()
      .isEmpty()
      .withMessage('El id de la empresa es requerido'),
    body('clienteId')
      .not()
      .isEmpty()
      .withMessage('El id del cliente es requerido'),
    body('productoId')
      .not()
      .isEmpty()
      .withMessage('El id del producto es requerido'),
    body('unidadMedidaId')
      .not()
      .isEmpty()
      .withMessage('El id de la unidad medida es requerido'),
    body('manjadorPrecioId')
      .not()
      .isEmpty()
      .withMessage('El id de manjador Precio es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const {
      empresaId,
      clienteId,
      productoId,
      unidadMedidaId,
      manjadorPrecioId,
      cantidadProducto,
    } = req.body;
    const EXPIRACION_VENTANA_SEGUNDOS = 1 * 60;

    const empresa = await Empresa.findById(empresaId);
    const establecimiento = await Establecimiento.findOne({empresaId:req.usuarioActual!.empresaId});
    if (!empresa) {
      throw new SolicitudIncorrecta(
        'Esta empresa no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    if (!establecimiento) {
      throw new SolicitudIncorrecta(
        'Este establecimiento no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const cliente = await Cliente.findById(clienteId);
    if (!cliente) {
      throw new SolicitudIncorrecta(
        'Este cliente no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const producto = await Producto.findById(productoId);
    if (!producto) {
      throw new SolicitudIncorrecta(
        'Este producto no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const unidadMedida = await UnidadMedida.findById(unidadMedidaId);
    if (!unidadMedida) {
      throw new SolicitudIncorrecta(
        'Esta unidad de medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const manejadorPrecio = await ManejadorPrecio.findById(manjadorPrecioId);
    if (!manejadorPrecio) {
      throw new SolicitudIncorrecta(
        'Este precio no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    let productoCompraTMP = await ProductoCompraTMP.findOne({
      productoId: producto.id,
      empresaId: empresa.id,
      usuarioIdAlta: req.usuarioActual!.id,
    });

    if (!productoCompraTMP) {
      productoCompraTMP = ProductoCompraTMP.build({
        productoId: producto.id,
        descripcionProducto: producto.descripcion,
        tipoProducto: producto.tipoProducto,
        unidadMedidaId: unidadMedida.id,
        literal: unidadMedida.literal,
        manejadorPrecioId: manejadorPrecio.id,
        descripcionManejadorPrecio: manejadorPrecio.descripcion,
        tipoPrecio: manejadorPrecio.tipoPrecio,
        precioProducto: manejadorPrecio.precio,
        cantidadProducto: cantidadProducto,
        sumatoriaPrecioProducto: cantidadProducto * manejadorPrecio.precio,
        empresaId: empresa.id,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });

      await new PublicadoProductoCompraCreado(natsWrapper.client).publish({
        id: productoCompraTMP.id,
        productoId: productoCompraTMP.productoId,
        descripcionProducto: productoCompraTMP.descripcionProducto,
        tipoProducto: productoCompraTMP.tipoProducto,
        unidadMedidaId: productoCompraTMP.unidadMedidaId,
        literal: productoCompraTMP.literal,
        manejadorPrecioId: productoCompraTMP.manejadorPrecioId,
        descripcionManejadorPrecio:
          productoCompraTMP.descripcionManejadorPrecio,
        tipoPrecio: productoCompraTMP.tipoPrecio,
        precioProducto: productoCompraTMP.precioProducto,
        cantidadProducto: productoCompraTMP.cantidadProducto,
        sumatoriaPrecioProducto: productoCompraTMP.sumatoriaPrecioProducto,
        empresaId: productoCompraTMP.empresaId,
        usuarioIdAlta: productoCompraTMP.usuarioIdAlta,
        emailUsuarioAlta: productoCompraTMP.emailUsuarioAlta,
        version: productoCompraTMP.version,
      });
      await productoCompraTMP.save();

    } else {
      const cantidad = productoCompraTMP.cantidadProducto + cantidadProducto;
      const sumatoria = productoCompraTMP.precioProducto * cantidad;
      productoCompraTMP.set({
        cantidadProducto: cantidad,
        sumatoriaPrecioProducto: sumatoria,
      });
      await productoCompraTMP.save();
      await new PublicadoProductoCompraActualizado(natsWrapper.client).publish({
        id: productoCompraTMP.id,
        productoId: productoCompraTMP.productoId,
        descripcionProducto: productoCompraTMP.descripcionProducto,
        tipoProducto: productoCompraTMP.tipoProducto,
        unidadMedidaId: productoCompraTMP.unidadMedidaId,
        literal: productoCompraTMP.literal,
        manejadorPrecioId: productoCompraTMP.manejadorPrecioId,
        descripcionManejadorPrecio:
          productoCompraTMP.descripcionManejadorPrecio,
        tipoPrecio: productoCompraTMP.tipoPrecio,
        precioProducto: productoCompraTMP.precioProducto,
        cantidadProducto: productoCompraTMP.cantidadProducto,
        sumatoriaPrecioProducto: productoCompraTMP.sumatoriaPrecioProducto,
        empresaId: productoCompraTMP.empresaId,
        usuarioIdAlta: productoCompraTMP.usuarioIdAlta,
        emailUsuarioAlta: productoCompraTMP.emailUsuarioAlta,
        version: productoCompraTMP.version,
      });
    }

    const expiracion = new Date();
    expiracion.setSeconds(
      expiracion.getSeconds() + EXPIRACION_VENTANA_SEGUNDOS
    );

    let ventaTMP = await VentaTMP.findOne({
      empresa,
      establecimiento,
      cliente,
      usuarioIdAlta: req.usuarioActual!.id,
    }).populate('productoCompraTMP');

    let total = 0;
    if (!ventaTMP) {
      total = productoCompraTMP.sumatoriaPrecioProducto!;
      ventaTMP = VentaTMP.build({
        empresa,
        establecimiento,
        cliente,
        productoCompraTMP: [productoCompraTMP],
        contadorProducto: 1,
        totalVenta: total,
        expiracion,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });
    } else {
      let existeVenta = false;

      for (let buscarProducto in ventaTMP.productoCompraTMP) {
        let productoEncontrado = ventaTMP.productoCompraTMP[buscarProducto];

        if (productoEncontrado.productoId == productoCompraTMP.productoId) {
          existeVenta = true;
        }
      }
      if (!existeVenta) {
        let conteo = ventaTMP.contadorProducto;
        total =
          ventaTMP.totalVenta! + productoCompraTMP.sumatoriaPrecioProducto!;
        ventaTMP.set({ contadorProducto: conteo + 1, totalVenta: total });
        ventaTMP.productoCompraTMP.push(productoCompraTMP);
      } else {
        total =
          ventaTMP.totalVenta! +
          cantidadProducto * productoCompraTMP.precioProducto;
        ventaTMP.set({ totalVenta: total });
      }
    }

    await ventaTMP.save();

    const ventaTemporal = await VentaTMP.findById(ventaTMP.id)
      .populate('productoCompraTMP')
      .populate('empresa')
      .populate('establecimiento')
      .populate('proveedor');

    if (
      ventaTemporal!.estadoCompra === EstadoCompra.Creada &&
      ventaTemporal!.contadorProducto === 1 &&
      ventaTemporal!.version === 0
    ) {
      await new PublicadorPreVentaCreada(natsWrapper.client).publish({
        id: ventaTemporal!.id,
        producto: ventaTemporal!.productoCompraTMP,
        empresa: ventaTemporal!.empresa,
        establecimiento: ventaTemporal!.establecimiento,
        cliente: ventaTemporal!.cliente,
        estadoCompra: ventaTemporal!.estadoCompra,
        cantidadProducto: ventaTemporal!.contadorProducto,
        totalVenta: ventaTemporal!.totalVenta!,
        expiracion: ventaTemporal!.expiracion,
        version: ventaTemporal!.version,
      });
    }

    res.status(201).send(ventaTemporal);
  }
);

export { router as crearPreVentaRouter };

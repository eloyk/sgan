import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validarSolicitud,
  SolicitudIncorrecta,
  Empresa,
  Producto,
  UnidadMedida,
  Proveedor,
  ManejadorPrecio,
  EstadoCompra,
} from '@eloyk/comun';
import { CompraTMP } from '../models/compraTMP';
import { ProductoCompraTMP } from '../models/producto-compraTMP';
import { natsWrapper } from '../nats-wrapper';
import { PublicadorPreCompraCreada } from '../eventos/publicadores/publicador-pre-compra-creada';
import { PublicadoProductoCompraCreado } from '../eventos/publicadores/publicador-producto-compra-creado';
import { PublicadoProductoCompraActualizado } from '../eventos/publicadores/publicador-producto-compra-actualizado';

const router = express.Router();

router.post(
  '/api/compra/precompra',
  requireAuth,
  [
    body('empresaId')
      .not()
      .isEmpty()
      .withMessage('El id de la empresa es requerido'),
    body('proveedorId')
      .not()
      .isEmpty()
      .withMessage('El id del proveedor es requerido'),
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
      proveedorId,
      productoId,
      unidadMedidaId,
      manjadorPrecioId,
      cantidadProducto,
    } = req.body;
    const EXPIRACION_VENTANA_SEGUNDOS = 1 * 60;

    const empresa = await Empresa.findById(empresaId);
    if (!empresa) {
      throw new SolicitudIncorrecta(
        'Esta empresa no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const proveedor = await Proveedor.findById(proveedorId);
    if (!proveedor) {
      throw new SolicitudIncorrecta(
        'Esta unidad de medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const producto = await Producto.findById(productoId);
    if (!producto) {
      throw new SolicitudIncorrecta(
        'Esta unidad de medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
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
        'Esta unidad de medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
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

    let compraTMP = await CompraTMP.findOne({
      empresa: empresa,
      proveedor: proveedor,
      usuarioIdAlta: req.usuarioActual!.id,
    }).populate('productoCompraTMP');

    let total = 0;
    if (!compraTMP) {
      total = productoCompraTMP.sumatoriaPrecioProducto!;
      compraTMP = CompraTMP.build({
        empresa: empresa,
        proveedor: proveedor,
        productoCompraTMP: [productoCompraTMP],
        contadorProducto: 1,
        totalCompra: total,
        expiracion,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });
    } else {
      let existecompra = false;

      for (let compra in compraTMP.productoCompraTMP) {
        let buscarProducto = compraTMP.productoCompraTMP[compra];

        if (buscarProducto.productoId == productoCompraTMP.productoId) {
          existecompra = true;
        }
      }
      if (!existecompra) {
        let conteo = compraTMP.contadorProducto;
        total =
          compraTMP.totalCompra! + productoCompraTMP.sumatoriaPrecioProducto!;
        compraTMP.set({ contadorProducto: conteo + 1, totalCompra: total });
        compraTMP.productoCompraTMP.push(productoCompraTMP);
      } else {
        total =
          compraTMP.totalCompra! +
          cantidadProducto * productoCompraTMP.precioProducto;
        compraTMP.set({ totalCompra: total });
      }
    }

    await compraTMP.save();

    const compraTemporal = await CompraTMP.findById(compraTMP.id)
      .populate('productoCompraTMP')
      .populate('empresa')
      .populate('proveedor');

    if (
      compraTemporal!.estadoCompra === EstadoCompra.Creada &&
      compraTemporal!.contadorProducto === 1 &&
      compraTemporal!.version === 0
    ) {
      await new PublicadorPreCompraCreada(natsWrapper.client).publish({
        id: compraTemporal!.id,
        producto: compraTemporal!.productoCompraTMP,
        empresa: compraTemporal!.empresa,
        proveedor: compraTemporal!.proveedor,
        estadoCompra: compraTemporal!.estadoCompra,
        cantidadProducto: compraTemporal!.contadorProducto,
        totalCompra: compraTemporal!.totalCompra!,
        expiracion: compraTemporal!.expiracion,
        version: compraTemporal!.version,
      });
    }

    res.status(201).send(compraTemporal);
  }
);

export { router as crearPreCompraRouter };

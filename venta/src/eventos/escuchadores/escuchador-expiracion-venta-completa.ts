import {
  Escuchador,
  Adjuntos,
  EventoExpiracionVentaCompleta,
  EstadoCompra,
  Venta,
  ProductoCompra,
} from '@eloyk/comun';
import { Message } from 'node-nats-streaming';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { VentaTMP } from '../../models/ventaTMP';
import { PublicadorVentaCancelada } from '../publicadores/publicador-venta-cancelada';
import { ProductoCompraTMP } from '../../models/producto-compraTMP';

export class EscuchadorExpiracionVentaCompleta extends Escuchador<
  EventoExpiracionVentaCompleta
> {
  nombreGrupoCola = nombreGrupoCola;
  adjunto: Adjuntos.ExpiracionVentaCompleta = Adjuntos.ExpiracionVentaCompleta;

  async onMessage(data: EventoExpiracionVentaCompleta['data'], msg: Message) {
    let venta = await Venta.findById(data.ventaId).populate('producto');

    if (!venta) {
      const ventaTMP = await VentaTMP.findById(data.ventaId)
        .populate('productoCompraTMP')
        .populate('empresa')
        .populate('establecimiento')
        .populate('proveedor');

      venta = Venta.build({
        id: ventaTMP!.id,
        empresa: ventaTMP!.empresa,
        cliente: ventaTMP!.cliente,
        establecimiento: ventaTMP!.establecimiento,
        estadoCompra: EstadoCompra.Cancelada,
        producto: ventaTMP!.productoCompraTMP,
        cantidadProducto: ventaTMP!.contadorProducto,
        totalVenta: ventaTMP!.totalVenta!,
        expiracion: ventaTMP!.expiracion,
        usuarioIdAlta: ventaTMP!.usuarioIdAlta,
        emailUsuarioAlta: ventaTMP!.emailUsuarioAlta,
      });

      for (let buscarProducto in ventaTMP!.productoCompraTMP) {
        let encontradaProducto = ventaTMP!.productoCompraTMP[buscarProducto];
        const productoCompra = ProductoCompra.build({
          id: encontradaProducto.id,
          productoId: encontradaProducto.productoId,
          descripcionProducto: encontradaProducto.descripcionProducto,
          tipoProducto: encontradaProducto.tipoProducto,
          unidadMedidaId: encontradaProducto.unidadMedidaId,
          literal: encontradaProducto.literal,
          manejadorPrecioId: encontradaProducto.manejadorPrecioId,
          descripcionManejadorPrecio:
            encontradaProducto.descripcionManejadorPrecio,
          tipoPrecio: encontradaProducto.tipoPrecio,
          precioProducto: encontradaProducto.precioProducto,
          cantidadProducto: encontradaProducto.cantidadProducto,
          sumatoriaPrecioProducto: encontradaProducto.sumatoriaPrecioProducto,
          empresaId: encontradaProducto.empresaId,
          usuarioIdAlta: encontradaProducto.usuarioIdAlta,
          emailUsuarioAlta: encontradaProducto.emailUsuarioAlta,
        });
        await productoCompra.save();

        ProductoCompraTMP.findOne({ _id: encontradaProducto.id })
          .remove()
          .exec();
      }

      VentaTMP.findOne({ _id: ventaTMP!.id }).remove().exec();
    }

    if (venta.estadoCompra === EstadoCompra.Completa) {
      return msg.ack();
    }

    venta.set({
      estadoCompra: EstadoCompra.Cancelada,
    });
    await venta.save();

    await new PublicadorVentaCancelada(this.cliente).publish({
      id: venta.id,
      producto: venta.producto,
      empresa: venta.empresa,
      establecimiento: venta.establecimiento,
      cliente: venta.cliente,
      estadoCompra: venta.estadoCompra,
      totalVenta: venta.totalVenta,
      expiracion: venta.expiracion,
      version: venta.version,
    });

    msg.ack();
  }
}

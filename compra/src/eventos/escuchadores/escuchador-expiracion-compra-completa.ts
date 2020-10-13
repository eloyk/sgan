import {
  Escuchador,
  Adjuntos,
  EventoExpiracionCompraCompleta,
  EstadoCompra,
  Compra,
  ProductoCompra,
} from '@eloyk/comun';
import { Message } from 'node-nats-streaming';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { CompraTMP } from '../../models/compraTMP';
import { PublicadorCompraCancelada } from '../publicadores/publicador-compra-cancelada';
import { ProductoCompraTMP } from '../../models/producto-compraTMP';

export class EscuchadorExpiracionCompraCompleta extends Escuchador<
  EventoExpiracionCompraCompleta
> {
  nombreGrupoCola = nombreGrupoCola;
  adjunto: Adjuntos.ExpiracionCompraCompleta =
    Adjuntos.ExpiracionCompraCompleta;

  async onMessage(data: EventoExpiracionCompraCompleta['data'], msg: Message) {
    let compra = await Compra.findById(data.compraId).populate('producto');

    if (!compra) {
      const compraTMP = await CompraTMP.findById(data.compraId)
        .populate('productoCompraTMP')
        .populate('empresa')
        .populate('proveedor')
        .populate('establecimiento');

      compra = Compra.build({
        id: compraTMP!.id,
        empresa: compraTMP!.empresa,
        establecimiento: compraTMP!.establecimiento,
        proveedor: compraTMP!.proveedor,
        estadoCompra: EstadoCompra.Cancelada,
        producto: compraTMP!.productoCompraTMP,
        cantidadProducto: compraTMP!.contadorProducto,
        totalCompra: compraTMP!.totalCompra!,
        expiracion: compraTMP!.expiracion,
        usuarioIdAlta: compraTMP!.usuarioIdAlta,
        emailUsuarioAlta: compraTMP!.emailUsuarioAlta,
      });

      for (let buscarCompra in compraTMP!.productoCompraTMP) {
        let encontradaCompra = compraTMP!.productoCompraTMP[buscarCompra];
        const productoCompra = ProductoCompra.build({
          id: encontradaCompra.id,
          productoId: encontradaCompra.productoId,
          descripcionProducto: encontradaCompra.descripcionProducto,
          tipoProducto: encontradaCompra.tipoProducto,
          unidadMedidaId: encontradaCompra.unidadMedidaId,
          literal: encontradaCompra.literal,
          manejadorPrecioId: encontradaCompra.manejadorPrecioId,
          descripcionManejadorPrecio:
            encontradaCompra.descripcionManejadorPrecio,
          tipoPrecio: encontradaCompra.tipoPrecio,
          precioProducto: encontradaCompra.precioProducto,
          cantidadProducto: encontradaCompra.cantidadProducto,
          sumatoriaPrecioProducto: encontradaCompra.sumatoriaPrecioProducto,
          empresaId: encontradaCompra.empresaId,
          usuarioIdAlta: encontradaCompra.usuarioIdAlta,
          emailUsuarioAlta: encontradaCompra.emailUsuarioAlta,
        });
        await productoCompra.save();

        ProductoCompraTMP.findOne({ _id: encontradaCompra.id }).remove().exec();
      }

      CompraTMP.findOne({ _id: compraTMP!.id }).remove().exec();
    }

    if (compra.estadoCompra === EstadoCompra.Completa) {
      return msg.ack();
    }

    compra.set({
      estadoCompra: EstadoCompra.Cancelada,
    });
    await compra.save();

    await new PublicadorCompraCancelada(this.cliente).publish({
      id: compra.id,
      producto: compra.producto,
      empresa: compra.empresa,
      establecimiento: compra.establecimiento,
      proveedor: compra.proveedor,
      estadoCompra: compra.estadoCompra,
      totalCompra: compra.totalCompra,
      expiracion: compra.expiracion,
      version: compra.version,
    });

    msg.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearProductoCompra,
  ProductoCompra,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProductoCompraCreado extends Escuchador<
  EventoCrearProductoCompra
> {
  adjunto: Adjuntos.ProductoCompraCreado = Adjuntos.ProductoCompraCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearProductoCompra['data'], msj: Message) {
    const {
      id,
      productoId,
      descripcionProducto,
      tipoProducto,
      unidadMedidaId,
      literal,
      manejadorPrecioId,
      descripcionManejadorPrecio,
      tipoPrecio,
      precioProducto,
      cantidadProducto,
      sumatoriaPrecioProducto,
      empresaId,
      usuarioIdAlta,
      emailUsuarioAlta,
    } = data;

    const productoCompra = ProductoCompra.build({
      id,
      productoId,
      descripcionProducto,
      tipoProducto,
      unidadMedidaId,
      literal,
      manejadorPrecioId,
      descripcionManejadorPrecio,
      tipoPrecio,
      precioProducto,
      cantidadProducto,
      sumatoriaPrecioProducto,
      empresaId,
      usuarioIdAlta,
      emailUsuarioAlta,
    });

    await productoCompra.save();

    msj.ack();
  }
}

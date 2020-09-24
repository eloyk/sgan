import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActualizarProductoCompra,
  ProductoCompra,
  ErrorNoEncontrado,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProductoCompraActualizado extends Escuchador<
  EventoActualizarProductoCompra
> {
  adjunto: Adjuntos.ProductoCompraActualizado =
    Adjuntos.ProductoCompraActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarProductoCompra['data'], msj: Message) {
    const productoCompra = await ProductoCompra.findByEvent(data);
    const { cantidadProducto, sumatoriaPrecioProducto } = data;

    if (!productoCompra) {
      return new ErrorNoEncontrado();
    }

    productoCompra.set({
      cantidadProducto,
      sumatoriaPrecioProducto,
    });
    await productoCompra.save();

    msj.ack();
  }
}

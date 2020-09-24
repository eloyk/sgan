import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoActulizarProducto } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { ProductoCategoria } from '../../models/producto-categoria';

export class EscuchadorProductoActulizado extends Escuchador<
  EventoActulizarProducto
> {
  adjunto: Adjuntos.ProductoActualizado = Adjuntos.ProductoActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarProducto['data'], msj: Message) {
    const { id, codigoBarra, urlImagen } = data;

    const producto = await ProductoCategoria.findById(id);

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    producto.set({ codigoBarra, urlImagen });

    await producto.save();

    msj.ack();
  }
}

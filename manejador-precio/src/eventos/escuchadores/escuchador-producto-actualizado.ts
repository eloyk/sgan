import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActulizarProducto,
  Producto,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProductoActulizado extends Escuchador<
  EventoActulizarProducto
> {
  adjunto: Adjuntos.ProductoActualizado = Adjuntos.ProductoActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarProducto['data'], msj: Message) {
    const producto = await Producto.findByEvent(data);
    const { codigoBarra, urlImagen } = data;

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    producto.set({ codigoBarra, urlImagen });

    await producto.save();

    msj.ack();
  }
}

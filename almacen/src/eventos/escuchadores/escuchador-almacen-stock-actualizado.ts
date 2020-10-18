import { Message } from 'node-nats-streaming';
import { Adjuntos, Almacen, Escuchador, EventoActualizarAlmacenStock } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorAlmacenStockActulizado extends Escuchador<
EventoActualizarAlmacenStock
> {
  adjunto: Adjuntos.AlmacenStockActualizado = Adjuntos.AlmacenStockActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarAlmacenStock['data'], msj: Message) {
    const almacen = await Almacen.findByEvent(data);
    const { 
      cantidad,
      precioProducto,
      sumatoriaPrecioProducto,
      fechaUltimaCompra,
      usuarioUltimaCompra
     } = data;


    if (!almacen) {
      throw new Error('Almacen no encontrado');
    }

    almacen.set({ cantidad,
      precioProducto,
      sumatoriaPrecioProducto,
      fechaUltimaCompra,
      usuarioUltimaCompra, });

    await almacen.save();

    msj.ack();
  }
}

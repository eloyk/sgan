import { Message } from 'node-nats-streaming';
import { Adjuntos, Almacen, Escuchador, EventoActualizarAlmacen } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorAlmacenActulizado extends Escuchador<
EventoActualizarAlmacen
> {
  adjunto: Adjuntos.AlmacenActualizado = Adjuntos.AlmacenActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarAlmacen['data'], msj: Message) {
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

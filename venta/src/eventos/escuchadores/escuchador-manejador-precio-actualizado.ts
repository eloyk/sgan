import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActualizarManejadorPrecio,
  ManejadorPrecio,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorManejadorPrecioActualizado extends Escuchador<
  EventoActualizarManejadorPrecio
> {
  adjunto: Adjuntos.ManejadorPrecioActualizado =
    Adjuntos.ManejadorPrecioActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarManejadorPrecio['data'], msj: Message) {
    const { descripcion, tipoPrecio, precio } = data;

    const manejadorPrecio = await ManejadorPrecio.findByEvent(data);

    manejadorPrecio!.set({
      descripcion,
      tipoPrecio,
      precio,
    });
    await manejadorPrecio!.save();

    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoVentaCancelada,
  ProductoCompra,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorVentaCancelada extends Escuchador<EventoVentaCancelada> {
  adjunto: Adjuntos.VentaCancelada = Adjuntos.VentaCancelada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoVentaCancelada['data'], msj: Message) {
    const { producto } = data;

    for (let buscarproducto in producto) {
      let productoEncontrado = producto[buscarproducto];
      console.log(productoEncontrado);
      await ProductoCompra.findOne({ _id: productoEncontrado }).remove().exec();
    }

    msj.ack();
  }
}

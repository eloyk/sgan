import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCompraCancelada,
  ProductoCompra,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorCompraCancelada extends Escuchador<
  EventoCompraCancelada
> {
  adjunto: Adjuntos.CompraCancelada = Adjuntos.CompraCancelada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCompraCancelada['data'], msj: Message) {
    const { producto } = data;

    for (let buscarproducto in producto) {
      let productoEncontrado = producto[buscarproducto];
      console.log(productoEncontrado);
      await ProductoCompra.findOne({ _id: productoEncontrado }).remove().exec();
    }

    msj.ack();
  }
}

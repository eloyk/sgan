import { Escuchador, EventoPreCompraCreada, Adjuntos } from '@eloyk/comun';
import { Message } from 'node-nats-streaming';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { expiracionCola } from '../../colas/expiracion-cola';

export class EscuchadorPreCompraCreada extends Escuchador<
  EventoPreCompraCreada
> {
  adjunto: Adjuntos.PreCompraCreada = Adjuntos.PreCompraCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoPreCompraCreada['data'], msg: Message) {
    const delay = new Date(data.expiracion).getTime() - new Date().getTime();
    console.log(`Esta compra se cancelara en: ${delay} milisegundos`);

    await expiracionCola.add(
      {
        compraId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}

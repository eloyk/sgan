import { Escuchador, EventoPreVentaCreada, Adjuntos } from '@eloyk/comun';
import { Message } from 'node-nats-streaming';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { expiracionColaVenta } from '../../colas/expiracion-cola-venta';

export class EscuchadorPreVentaCreada extends Escuchador<EventoPreVentaCreada> {
  adjunto: Adjuntos.PreVentaCreada = Adjuntos.PreVentaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoPreVentaCreada['data'], msg: Message) {
    const delay = new Date(data.expiracion).getTime() - new Date().getTime();
    console.log(`Esta venta se cancelara en: ${delay} milisegundos`);

    await expiracionColaVenta.add(
      {
        ventaId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearFactura,
  Compra,
  EstadoCompra,
  ErrorNoEncontrado,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorFacturaCreada extends Escuchador<EventoCrearFactura> {
  adjunto: Adjuntos.FacturaCreada = Adjuntos.FacturaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearFactura['data'], msj: Message) {
    const { facturaId, compraId } = data;

    const compra = await Compra.findById(compraId);

    if (!compra) {
      return new ErrorNoEncontrado();
    }

    compra.set({
      facturaId: facturaId,
      estadoCompra: EstadoCompra.Completa,
    });

    await compra.save();

    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearFacturaVenta,
  Venta,
  EstadoCompra,
  ErrorNoEncontrado,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorFacturaVentaCreada extends Escuchador<
  EventoCrearFacturaVenta
> {
  adjunto: Adjuntos.FacturaVentaCreada = Adjuntos.FacturaVentaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearFacturaVenta['data'], msj: Message) {
    const { facturaId, ventaId } = data;

    const venta = await Venta.findById(ventaId);

    if (!venta) {
      return new ErrorNoEncontrado();
    }

    venta.set({
      facturaId: facturaId,
      estadoCompra: EstadoCompra.Completa,
    });

    await venta.save();

    msj.ack();
  }
}

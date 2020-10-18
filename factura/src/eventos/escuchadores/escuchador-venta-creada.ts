import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoVentaCreada, Venta } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { FacturaVenta } from '../../models/factura-venta';
import { PublicadorFacturaVentaCreada } from '../publicadores/publicador-factura-venta-creada';

export class EscuchadorVentaCreada extends Escuchador<EventoVentaCreada> {
  adjunto: Adjuntos.VentaCreada = Adjuntos.VentaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoVentaCreada['data'], msj: Message) {
    const {
      id,
      empresa,
      establecimiento,
      cliente,
      estadoCompra,
      producto,
      cantidadProducto,
      totalVenta,
      expiracion,
      facturaId,
      usuarioIdAlta,
      emailUsuarioAlta,
      fechaAlta,
    } = data;

    const venta = Venta.build({
      id,
      empresa,
      establecimiento,
      cliente,
      estadoCompra,
      producto,
      cantidadProducto,
      totalVenta,
      expiracion,
      facturaId,
      usuarioIdAlta,
      emailUsuarioAlta,
      fechaAlta,
    });

    await venta.save();

    const factura = FacturaVenta.build({
      venta,
      tipoFactura: 'venta',
    });

    await factura.save();

    await new PublicadorFacturaVentaCreada(this.cliente).publish({
      facturaId: factura.id,
      ventaId: venta.id,
    });

    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCompraCreada,
  Compra,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { FacturaCompra } from '../../models/factura-compra';
import { PublicadorFacturaCreada } from '../publicadores/publicador-factura-creada';

export class EscuchadorCompraCreada extends Escuchador<EventoCompraCreada> {
  adjunto: Adjuntos.CompraCreada = Adjuntos.CompraCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCompraCreada['data'], msj: Message) {
    const {
      id,
      empresa,
      establecimiento,
      proveedor,
      estadoCompra,
      producto,
      cantidadProducto,
      totalCompra,
      expiracion,
      facturaId,
      usuarioIdAlta,
      emailUsuarioAlta,
      fechaAlta,
    } = data;

    const compra = Compra.build({
      id,
      empresa,
      establecimiento,
      proveedor,
      estadoCompra,
      producto,
      cantidadProducto,
      totalCompra,
      expiracion,
      facturaId,
      usuarioIdAlta,
      emailUsuarioAlta,
      fechaAlta,
    });

    await compra.save();

    const factura = FacturaCompra.build({
      compra,
      tipoFactura: 'compra',
    });

    await factura.save();

    await new PublicadorFacturaCreada(this.cliente).publish({
      facturaId: factura.id,
      compraId: compra.id,
    });

    msj.ack();
  }
}

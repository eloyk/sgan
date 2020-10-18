import { Message } from 'node-nats-streaming';
import { Adjuntos, Almacen, Escuchador, EventoCrearAlmacen } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorAlmacenCreado extends Escuchador<EventoCrearAlmacen> {
  adjunto: Adjuntos.AlmacenCreado = Adjuntos.AlmacenCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearAlmacen['data'], msj: Message) {
    const {
      id,
      descripcion,
      empresaId,
      establecimientoId,
      productoId,
      nombreProducto,
      cantidad,
      tipoProducto,
      tipoPrecio,
      managerPrecioId,
      descripcionPrecio,
      literalUnidadMedida,
      precioProducto,
      sumatoriaPrecioProducto,
      fechaUltimaCompra,
      usuarioUltimaCompra,
    } = data;

    const almacen = Almacen.build({
      id,
      descripcion,
      empresaId,
      establecimientoId,
      productoId,
      nombreProducto,
      cantidad,
      tipoProducto,
      tipoPrecio,
      managerPrecioId,
      descripcionPrecio,
      literalUnidadMedida,
      precioProducto,
      sumatoriaPrecioProducto,
      fechaUltimaCompra,
      usuarioUltimaCompra,
    });
    await almacen.save();

    msj.ack();
  }
}

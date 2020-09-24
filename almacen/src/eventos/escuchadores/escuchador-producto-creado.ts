import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoCrearProducto } from '@eloyk/comun';
import { ProductoCategoria } from '../../models/producto-categoria';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProductoCreado extends Escuchador<EventoCrearProducto> {
  adjunto: Adjuntos.ProductoCreado = Adjuntos.ProductoCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearProducto['data'], msj: Message) {
    const {
      id,
      descripcion,
      codigoBarra,
      tipoProducto,
      urlImagen,
      empresaId,
      usuarioIdAlta,
      emailUsuarioAlta,
    } = data;

    const producto = ProductoCategoria.build({
      id,
      descripcion,
      codigoBarra,
      tipoProducto,
      urlImagen,
      empresaId,
      usuarioIdAlta,
      emailUsuarioAlta,
    });
    await producto.save();

    msj.ack();
  }
}

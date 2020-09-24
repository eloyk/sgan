import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearProductoUnidaMedida,
  Producto,
  ErrorNoEncontrado,
  UnidadMedida,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProductoUnidadMedidaCreado extends Escuchador<
  EventoCrearProductoUnidaMedida
> {
  adjunto: Adjuntos.ProductoUnidadMedidaCreado =
    Adjuntos.ProductoUnidadMedidaCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearProductoUnidaMedida['data'], msj: Message) {
    const producto = await Producto.findByEvent(data);

    const { unidadMedida } = data;

    const unidad = await UnidadMedida.findOne({
      _id: unidadMedida.id,
    });

    if (!producto) {
      throw new ErrorNoEncontrado();
    }

    if (!unidad) {
      throw new ErrorNoEncontrado();
    }

    producto.unidadMedida!.push(unidad);

    await producto.save();

    msj.ack();
  }
}

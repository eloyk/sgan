import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearManejadorPrecio,
  ManejadorPrecio,
  Producto,
  ErrorNoEncontrado,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorManejadorPrecioCreado extends Escuchador<
  EventoCrearManejadorPrecio
> {
  adjunto: Adjuntos.ManejadorPrecioCreado = Adjuntos.ManejadorPrecioCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearManejadorPrecio['data'], msj: Message) {
    const {
      id,
      productoId,
      unidadMedidaId,
      descripcion,
      tipoPrecio,
      precio,
      version,
    } = data;

    const producto = await Producto.findOne({
      _id: productoId,
      version: version - 1,
    });

    const manejadorPrecio = ManejadorPrecio.build({
      id,
      unidadMedidaId,
      descripcion,
      tipoPrecio,
      precio,
    });

    await manejadorPrecio.save();

    if (!producto) {
      throw new ErrorNoEncontrado();
    }

    producto.manejadorPrecio!.push(manejadorPrecio);

    await producto!.save();

    msj.ack();
  }
}

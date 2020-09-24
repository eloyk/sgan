import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearProducto,
  Producto,
  UnidadMedida,
} from '@eloyk/comun';
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
      unidadMedida,
    } = data;

    const unidad = await UnidadMedida.findOne({
      _id: unidadMedida.id,
    });

    const producto = Producto.build({
      id,
      descripcion,
      codigoBarra,
      tipoProducto,
      urlImagen,
      empresaId,
      usuarioIdAlta,
      emailUsuarioAlta,
      unidadMedida: [unidad!],
    });
    await producto.save();

    msj.ack();
  }
}

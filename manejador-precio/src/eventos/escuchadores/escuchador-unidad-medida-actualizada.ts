import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActulizarUnidadMedida,
  UnidadMedida,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorUnidadMedidaActualizada extends Escuchador<
  EventoActulizarUnidadMedida
> {
  adjunto: Adjuntos.UnidadMedidaActualizada = Adjuntos.UnidadMedidaActualizada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarUnidadMedida['data'], msj: Message) {
    const unidadmedida = await UnidadMedida.findByEvent(data);

    if (!unidadmedida) {
      throw new Error('Unidad de medida no encontrada');
    }

    const { descripcion, literal } = data;
    unidadmedida.set({
      descripcion,
      literal,
    });
    await unidadmedida.save();

    msj.ack();
  }
}

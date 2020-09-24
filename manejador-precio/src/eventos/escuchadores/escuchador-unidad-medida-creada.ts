import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearUnidadMedida,
  UnidadMedida,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorUnidadMedidaCreada extends Escuchador<
  EventoCrearUnidadMedida
> {
  adjunto: Adjuntos.UnidadMedidaCreada = Adjuntos.UnidadMedidaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearUnidadMedida['data'], msj: Message) {
    const { id, descripcion, literal, empresaId } = data;

    const unidadMedida = UnidadMedida.build({
      id,
      descripcion,
      literal,
      empresaId,
    });
    await unidadMedida.save();

    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearEstablecimiento,
  Establecimiento,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorEstablecimientoCreado extends Escuchador<EventoCrearEstablecimiento> {
  adjunto: Adjuntos.EstablecimientoCreado = Adjuntos.EstablecimientoCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearEstablecimiento['data'], msj: Message) {
    const {
      id,
      descripcion,
      subNombre,
      empresaId,
      direccion,
    } = data;

    const establecimiento = Establecimiento.build({
      id,
      descripcion,
      subNombre,
      empresaId,
      direccion,
    });
    
    await establecimiento.save();

    msj.ack();
  }
}

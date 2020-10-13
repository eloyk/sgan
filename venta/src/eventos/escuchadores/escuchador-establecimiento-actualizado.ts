import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActualizarEstablecimiento,
  Establecimiento,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorEstablecimientoActualizado extends Escuchador<
EventoActualizarEstablecimiento
> {
  adjunto: Adjuntos.EstablecimientoActualizado = Adjuntos.EstablecimientoActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarEstablecimiento['data'], msj: Message) {
    const establecimiento = await Establecimiento.findByEvent(data);

    if (!establecimiento) {
      throw new Error('Empresa no encontrada');
    }

    const {
      descripcion,
      subNombre,
      empresaId,
      direccion,
    } = data;

    establecimiento.set({
      descripcion,
      subNombre,
      empresaId,
      direccion,
    });
    
    await establecimiento.save();

    msj.ack();
  }
}

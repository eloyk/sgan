import {
  Publicador,
  EventoActualizarEstablecimiento,
  Adjuntos,
} from '@eloyk/comun';

export class PublicadorEstablecimientoActualizado extends Publicador<
EventoActualizarEstablecimiento
> {
  adjunto: Adjuntos.EstablecimientoActualizado =
    Adjuntos.EstablecimientoActualizado;
}

import {
  Publicador,
  EventoActualizarAlmacen,
  Adjuntos,
} from '@eloyk/comun';

export class PublicadorAlmacenActualizado extends Publicador<
EventoActualizarAlmacen
> {
  adjunto: Adjuntos.AlmacenActualizado =
    Adjuntos.AlmacenActualizado;
}

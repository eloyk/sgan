import {
  Publicador,
  Adjuntos,
  EventoActualizarManejadorPrecio,
} from '@eloyk/comun';

export class PublicadorManejadorPrecioActualizado extends Publicador<
  EventoActualizarManejadorPrecio
> {
  adjunto: Adjuntos.ManejadorPrecioActualizado =
    Adjuntos.ManejadorPrecioActualizado;
}

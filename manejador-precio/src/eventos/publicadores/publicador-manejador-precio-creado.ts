import { Publicador, Adjuntos, EventoCrearManejadorPrecio } from '@eloyk/comun';

export class PublicadorManejadorPrecioCreado extends Publicador<EventoCrearManejadorPrecio> {
  adjunto: Adjuntos.ManejadorPrecioCreado = Adjuntos.ManejadorPrecioCreado;
}

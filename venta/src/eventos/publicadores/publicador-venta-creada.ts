import { Publicador, EventoVentaCreada, Adjuntos } from '@eloyk/comun';

export class PublicadorVentaCreada extends Publicador<EventoVentaCreada> {
  adjunto: Adjuntos.VentaCreada = Adjuntos.VentaCreada;
}

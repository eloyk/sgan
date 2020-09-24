import { Publicador, EventoPreVentaCreada, Adjuntos } from '@eloyk/comun';

export class PublicadorPreVentaCreada extends Publicador<EventoPreVentaCreada> {
  adjunto: Adjuntos.PreVentaCreada = Adjuntos.PreVentaCreada;
}

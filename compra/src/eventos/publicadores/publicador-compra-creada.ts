import { Publicador, EventoCompraCreada, Adjuntos } from '@eloyk/comun';

export class PublicadorCompraCreada extends Publicador<EventoCompraCreada> {
  adjunto: Adjuntos.CompraCreada = Adjuntos.CompraCreada;
}

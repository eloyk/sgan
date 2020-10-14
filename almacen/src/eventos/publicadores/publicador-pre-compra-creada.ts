import { Publicador, EventoPreCompraCreada, Adjuntos } from '@eloyk/comun';

export class PublicadorPreCompraCreada extends Publicador<
  EventoPreCompraCreada
> {
  adjunto: Adjuntos.PreCompraCreada = Adjuntos.PreCompraCreada;
}

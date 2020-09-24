import { Publicador, Adjuntos, EventoCrearUnidadMedida } from '@eloyk/comun';

export class PublicadorUnidadMedidaCreada extends Publicador<
  EventoCrearUnidadMedida
> {
  adjunto: Adjuntos.UnidadMedidaCreada = Adjuntos.UnidadMedidaCreada;
}

import {
  Publicador,
  Adjuntos,
  EventoActulizarUnidadMedida,
} from '@eloyk/comun';

export class PublicadorUnidadMedidaActualizada extends Publicador<
  EventoActulizarUnidadMedida
> {
  adjunto: Adjuntos.UnidadMedidaActualizada = Adjuntos.UnidadMedidaActualizada;
}

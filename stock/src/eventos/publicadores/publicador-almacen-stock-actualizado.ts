import {
  Publicador,
  EventoActualizarAlmacenStock,
  Adjuntos,
} from '@eloyk/comun';

export class PublicadorAlmacenStockActualizado extends Publicador<
EventoActualizarAlmacenStock
> {
  adjunto: Adjuntos.AlmacenStockActualizado =
    Adjuntos.AlmacenStockActualizado;
}

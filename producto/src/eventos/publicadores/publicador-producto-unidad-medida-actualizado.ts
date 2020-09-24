import {
  Publicador,
  Adjuntos,
  EventoActualizarProductoUnidaMedida,
} from '@eloyk/comun';

export class PublicadorProductoUnidadMedidaActualizado extends Publicador<
  EventoActualizarProductoUnidaMedida
> {
  adjunto: Adjuntos.ProductoUnidadMedidaActualizado =
    Adjuntos.ProductoUnidadMedidaActualizado;
}

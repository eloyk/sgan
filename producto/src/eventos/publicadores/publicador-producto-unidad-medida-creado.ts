import {
  Publicador,
  Adjuntos,
  EventoCrearProductoUnidaMedida,
} from '@eloyk/comun';

export class PublicadorProductoUnidadMedidaCreado extends Publicador<
  EventoCrearProductoUnidaMedida
> {
  adjunto: Adjuntos.ProductoUnidadMedidaCreado =
    Adjuntos.ProductoUnidadMedidaCreado;
}

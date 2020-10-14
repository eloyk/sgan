import {
  Publicador,
  EventoActualizarProductoCompra,
  Adjuntos,
} from '@eloyk/comun';

export class PublicadoProductoCompraActualizado extends Publicador<
  EventoActualizarProductoCompra
> {
  adjunto: Adjuntos.ProductoCompraActualizado =
    Adjuntos.ProductoCompraActualizado;
}

import { Publicador, EventoCrearProductoCompra, Adjuntos } from '@eloyk/comun';

export class PublicadoProductoCompraCreado extends Publicador<
  EventoCrearProductoCompra
> {
  adjunto: Adjuntos.ProductoCompraCreado = Adjuntos.ProductoCompraCreado;
}

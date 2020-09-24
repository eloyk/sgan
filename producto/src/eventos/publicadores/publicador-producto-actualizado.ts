import { Publicador, Adjuntos, EventoActulizarProducto } from '@eloyk/comun';

export class PublicadorProductoActualizado extends Publicador<
  EventoActulizarProducto
> {
  adjunto: Adjuntos.ProductoActualizado = Adjuntos.ProductoActualizado;
}

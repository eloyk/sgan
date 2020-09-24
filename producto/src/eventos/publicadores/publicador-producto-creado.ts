import { Publicador, Adjuntos, EventoCrearProducto } from '@eloyk/comun';

export class PublicadorProductoCreado extends Publicador<EventoCrearProducto> {
  adjunto: Adjuntos.ProductoCreado = Adjuntos.ProductoCreado;
}

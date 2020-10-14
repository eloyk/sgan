import {
  Publicador,
  EventoCrearAlmacenCompra,
  Adjuntos,
} from '@eloyk/comun';

export class PublicadoAlmacenCompraCreado extends Publicador<
EventoCrearAlmacenCompra
> {
  adjunto: Adjuntos.AlmacenCompraCreado =
    Adjuntos.AlmacenCompraCreado;
}

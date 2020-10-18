import { Publicador, EventoCrearAlmacen, Adjuntos } from '@eloyk/comun';

export class PublicadorAlmacenCreado extends Publicador<
EventoCrearAlmacen
> {
  adjunto: Adjuntos.AlmacenCreado = Adjuntos.AlmacenCreado;
}

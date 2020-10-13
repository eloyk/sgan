import { Publicador, EventoCrearEstablecimiento, Adjuntos } from '@eloyk/comun';

export class PublicadorEstablecimientoCreado extends Publicador<
EventoCrearEstablecimiento
> {
  adjunto: Adjuntos.EstablecimientoCreado = Adjuntos.EstablecimientoCreado;
}

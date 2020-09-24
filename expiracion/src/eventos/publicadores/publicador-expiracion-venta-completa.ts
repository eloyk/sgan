import {
  Adjuntos,
  Publicador,
  EventoExpiracionVentaCompleta,
} from '@eloyk/comun';

export class PublicadorExpiracionVentaCompleta extends Publicador<
  EventoExpiracionVentaCompleta
> {
  adjunto: Adjuntos.ExpiracionVentaCompleta = Adjuntos.ExpiracionVentaCompleta;
}

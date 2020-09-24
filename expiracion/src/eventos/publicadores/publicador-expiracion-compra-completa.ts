import {
  Adjuntos,
  Publicador,
  EventoExpiracionCompraCompleta,
} from '@eloyk/comun';

export class ExpiracionCompraCompletaPublicador extends Publicador<
  EventoExpiracionCompraCompleta
> {
  adjunto: Adjuntos.ExpiracionCompraCompleta =
    Adjuntos.ExpiracionCompraCompleta;
}

import { Adjuntos, Publicador, EventoCrearFactura } from '@eloyk/comun';

export class PublicadorFacturaCreada extends Publicador<EventoCrearFactura> {
  adjunto: Adjuntos.FacturaCreada = Adjuntos.FacturaCreada;
}

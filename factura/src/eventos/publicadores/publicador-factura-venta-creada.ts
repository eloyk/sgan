import { Adjuntos, Publicador, EventoCrearFacturaVenta } from '@eloyk/comun';

export class PublicadorFacturaVentaCreada extends Publicador<
  EventoCrearFacturaVenta
> {
  adjunto: Adjuntos.FacturaVentaCreada = Adjuntos.FacturaVentaCreada;
}

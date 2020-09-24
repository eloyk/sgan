import { Adjuntos, Publicador, EventoVentaCancelada } from '@eloyk/comun';

export class PublicadorVentaCancelada extends Publicador<EventoVentaCancelada> {
  adjunto: Adjuntos.VentaCancelada = Adjuntos.VentaCancelada;
}

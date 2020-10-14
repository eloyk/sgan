import { Adjuntos, Publicador, EventoCompraCancelada } from '@eloyk/comun';

export class PublicadorCompraCancelada extends Publicador<
  EventoCompraCancelada
> {
  adjunto: Adjuntos.CompraCancelada = Adjuntos.CompraCancelada;
}

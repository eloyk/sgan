import { Publicador, Adjuntos, EventoCrearCliente } from '@eloyk/comun';

export class PublicadorClienteCreado extends Publicador<EventoCrearCliente> {
  adjunto: Adjuntos.ClienteCreado = Adjuntos.ClienteCreado;
}

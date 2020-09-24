import { Publicador, Adjuntos, EventoActulizarCliente } from '@eloyk/comun';

export class PublicadorClienteActualizado extends Publicador<
  EventoActulizarCliente
> {
  adjunto: Adjuntos.ClienteActualizado = Adjuntos.ClienteActualizado;
}

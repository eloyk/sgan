import { Publicador, Adjuntos, EventoActulizarProveedor } from '@eloyk/comun';

export class PublicadorProveedorActualizado extends Publicador<
  EventoActulizarProveedor
> {
  adjunto: Adjuntos.ProveedorActualizado = Adjuntos.ProveedorActualizado;
}

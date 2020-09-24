import { Publicador, Adjuntos, EventoCrearProveedor } from '@eloyk/comun';

export class PublicadorProveedorCreado extends Publicador<
  EventoCrearProveedor
> {
  adjunto: Adjuntos.ProveedorCreado = Adjuntos.ProveedorCreado;
}

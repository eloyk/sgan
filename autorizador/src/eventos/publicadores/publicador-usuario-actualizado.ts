import { Publicador, Adjuntos, EventoActualizarUsuario } from '@eloyk/comun';

export class PublicadorUsuarioActualizado extends Publicador<
EventoActualizarUsuario
> {
  adjunto: Adjuntos.UsuarioActualizado = Adjuntos.UsuarioActualizado;
}

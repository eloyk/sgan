import { Publicador, Adjuntos, EventoCrearUsuario } from '@eloyk/comun';

export class PublicadorUsuarioCreado extends Publicador<EventoCrearUsuario> {
  adjunto: Adjuntos.UsuarioCreado = Adjuntos.UsuarioCreado;
}

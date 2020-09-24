import { Publicador, EventoPermisoCreado, Adjuntos } from '@eloyk/comun';

export class PublicadoPermisoCreado extends Publicador<EventoPermisoCreado> {
  adjunto: Adjuntos.PermisoCreado = Adjuntos.PermisoCreado;
}

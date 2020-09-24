import { Publicador, Adjuntos, EventoActulizarEmpresa } from '@eloyk/comun';

export class PublicadorEmpresaActualizada extends Publicador<
  EventoActulizarEmpresa
> {
  adjunto: Adjuntos.EmpresaActualizada = Adjuntos.EmpresaActualizada;
}

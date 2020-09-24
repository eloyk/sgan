import { Publicador, Adjuntos, EventoCrearEmpresa } from '@eloyk/comun';

export class PublicadorEmpresaCreada extends Publicador<EventoCrearEmpresa> {
  adjunto: Adjuntos.EmpresaCreada = Adjuntos.EmpresaCreada;
}

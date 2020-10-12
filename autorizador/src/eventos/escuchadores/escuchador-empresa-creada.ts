import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoCrearEmpresa } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Usuario } from '../../models/usuario';
import { PublicadorUsuarioActualizado } from '../publicadores/publicador-usuario-actualizado';
import { natsWrapper } from '../../nats-wrapper';

export class EscuchadorEmpresaCreada extends Escuchador<EventoCrearEmpresa> {
  adjunto: Adjuntos.EmpresaCreada = Adjuntos.EmpresaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearEmpresa['data'], msj: Message) {
    const { id, nombreEmpresa, usuarioIdAlta } = data;

    const usuario = await Usuario.findById(usuarioIdAlta);

    usuario!.set({ empresaId: id, nombreEmpresa });

    await usuario!.save();
    new PublicadorUsuarioActualizado(natsWrapper.client).publish({
      id: usuario!.id,
      email: usuario!.email,
      password: usuario!.password,
      nombreEmpresa: usuario!.nombreEmpresa,
      empresaId: usuario!.empresaId,
      establecimientoId: usuario!.establecimientoId,
      superUsuario: usuario!.superUsuario,
      estadoUsuario: usuario!.estadoUsuario,
      version: usuario!.version,
    });
    
    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoCrearEmpresa } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Usuario } from '../../models/usuario';

export class EscuchadorEmpresaCreada extends Escuchador<EventoCrearEmpresa> {
  adjunto: Adjuntos.EmpresaCreada = Adjuntos.EmpresaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearEmpresa['data'], msj: Message) {
    const { id, nombreEmpresa, usuarioIdAlta } = data;

    const usuario = await Usuario.findById(usuarioIdAlta);

    usuario!.set({ empresaId: id, nombreEmpresa, superUsuario: true });

    await usuario!.save();

    msj.ack();
  }
}

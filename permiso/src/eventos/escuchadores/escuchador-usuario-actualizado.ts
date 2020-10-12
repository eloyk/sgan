import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoActualizarUsuario } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Usuario } from '../../models/usuario';

export class EscuchadorUsuarioActualizado extends Escuchador<EventoActualizarUsuario> {
  adjunto: Adjuntos.UsuarioActualizado = Adjuntos.UsuarioActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActualizarUsuario['data'], msj: Message) {
    const { id, nombreEmpresa, empresaId } = data;

    const usuario = await Usuario.findById(id);

    usuario!.set({ empresaId, nombreEmpresa });

    await usuario!.save();
    
    msj.ack();
  }
}

import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoCrearUsuario } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Usuario } from '../../models/usuario';

export class EscuchadorUsuarioCreado extends Escuchador<EventoCrearUsuario> {
  adjunto: Adjuntos.UsuarioCreado = Adjuntos.UsuarioCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearUsuario['data'], msj: Message) {
    const { id, email, password, nombreEmpresa, empresaId, establecimientoId, superUsuario, estadoUsuario } = data;

    const usuario = Usuario.build({
      id, 
      email, 
      password, 
      nombreEmpresa,
      empresaId,
      establecimientoId,
      superUsuario,
      estadoUsuario 
    });

    await usuario!.save();

    msj.ack();
  }
}

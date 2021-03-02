import { Message } from 'node-nats-streaming';
import { Adjuntos, Escuchador, EventoCrearEstablecimiento } from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Usuario } from '../../models/usuario';
import { PublicadorUsuarioActualizado } from '../publicadores/publicador-usuario-actualizado';
import { natsWrapper } from '../../nats-wrapper';

export class EscuchadorEstablecimientoCreado extends Escuchador<EventoCrearEstablecimiento> {
  adjunto: Adjuntos.EstablecimientoCreado = Adjuntos.EstablecimientoCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearEstablecimiento['data'], msj: Message) {
    const { id, descripcion, subNombre, empresaId, direccion } = data;

    const usuario = await Usuario.findOne({empresaId});

    usuario!.establecimientoId?.push( id );

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

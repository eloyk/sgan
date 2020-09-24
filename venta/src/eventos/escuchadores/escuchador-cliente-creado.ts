import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearCliente,
  Cliente,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorClienteCreado extends Escuchador<EventoCrearCliente> {
  adjunto: Adjuntos.ClienteCreado = Adjuntos.ClienteCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearCliente['data'], msj: Message) {
    const {
      id,
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      empresaId,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      usuarioIdAlta,
      emailUsuarioAlta,
    } = data;

    const cliente = Cliente.build({
      id,
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      empresaId,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      usuarioIdAlta,
      emailUsuarioAlta,
    });
    await cliente.save();

    msj.ack();
  }
}

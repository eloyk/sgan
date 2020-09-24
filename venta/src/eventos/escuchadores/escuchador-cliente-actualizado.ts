import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActulizarCliente,
  Cliente,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorClienteActualizado extends Escuchador<
  EventoActulizarCliente
> {
  adjunto: Adjuntos.ClienteActualizado = Adjuntos.ClienteActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarCliente['data'], msj: Message) {
    const cliente = await Cliente.findByEvent(data);
    const {
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
    } = data;

    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }

    cliente.set({
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
    });

    await cliente.save();

    msj.ack();
  }
}

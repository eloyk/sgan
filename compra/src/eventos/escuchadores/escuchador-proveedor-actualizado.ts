import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActulizarProveedor,
  Proveedor,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProveedorActulizado extends Escuchador<
  EventoActulizarProveedor
> {
  adjunto: Adjuntos.ProveedorActualizado = Adjuntos.ProveedorActualizado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarProveedor['data'], msj: Message) {
    const proveedor = await Proveedor.findByEvent(data);
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

    if (!proveedor) {
      throw new Error('Proveedor no encontrado');
    }

    proveedor.set({
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
    });

    await proveedor.save();

    msj.ack();
  }
}

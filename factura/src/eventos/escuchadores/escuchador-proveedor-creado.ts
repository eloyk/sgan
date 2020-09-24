import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearProveedor,
  Proveedor,
  SolicitudIncorrecta,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorProveedorCreado extends Escuchador<
  EventoCrearProveedor
> {
  adjunto: Adjuntos.ProveedorCreado = Adjuntos.ProveedorCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearProveedor['data'], msj: Message) {
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

    const buscarproveedor = Proveedor.findById(id);

    if (!buscarproveedor) {
      return new SolicitudIncorrecta('el proveedor ya existe');
    }

    const proveedor = Proveedor.build({
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
    await proveedor.save();

    msj.ack();
  }
}

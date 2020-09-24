import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoActulizarEmpresa,
  Empresa,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';

export class EscuchadorEmpresaActualizada extends Escuchador<
  EventoActulizarEmpresa
> {
  adjunto: Adjuntos.EmpresaActualizada = Adjuntos.EmpresaActualizada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoActulizarEmpresa['data'], msj: Message) {
    const empresa = await Empresa.findByEvent(data);

    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }

    const {
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
    } = data;
    empresa.set({
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
    });
    await empresa.save();

    msj.ack();
  }
}

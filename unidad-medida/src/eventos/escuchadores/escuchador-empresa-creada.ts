import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearEmpresa,
  Empresa,
  UnidadMedida,
  SolicitudIncorrecta,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { PublicadorUnidadMedidaCreada } from '../publicadores/publicador-unidad-medida-creado';

export class EscuchadorEmpresaCreada extends Escuchador<EventoCrearEmpresa> {
  adjunto: Adjuntos.EmpresaCreada = Adjuntos.EmpresaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearEmpresa['data'], msj: Message) {
    const {
      id,
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta,
      emailUsuarioAlta,
    } = data;

    const empresa = Empresa.build({
      id,
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta,
      emailUsuarioAlta,
    });
    await empresa.save();

    const unidadmedida = UnidadMedida.build({
      descripcion: 'Seleccione un una unidad de medida',
      literal: 'N/A',
      empresaId: empresa.id,
    });
    await unidadmedida.save();
    
    if (!unidadmedida) {
      throw new SolicitudIncorrecta("La unidad de medida no puso ser insertada por favor verifique que los parametros de la empresa sean correctos")
      }

    new PublicadorUnidadMedidaCreada(this.cliente).publish({
      id: unidadmedida.id,
      descripcion: unidadmedida.descripcion,
      literal: unidadmedida.literal,
      empresaId: unidadmedida.empresaId,
      version: unidadmedida.version,
    });

    msj.ack();
  }
}

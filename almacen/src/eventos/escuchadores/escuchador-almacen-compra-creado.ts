import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearAlmacenCompra,
  Almacen,
  Publicador
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { HistoricoAlmacen } from '../../models/historico-almacen';
import { PublicadorAlmacenCreado } from '../publicadores/publicador-almacen-creado';
import { natsWrapper } from '../../nats-wrapper';
import { PublicadorAlmacenActualizado } from '../publicadores/publicador-almacen-actualizado';

export class EscuchadorAlmacenCompraCreado extends Escuchador<EventoCrearAlmacenCompra> {
  adjunto: Adjuntos.AlmacenCompraCreado = Adjuntos.AlmacenCompraCreado;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearAlmacenCompra['data'], msj: Message) {
    const {
      descripcion,
      empresaId,
      establecimientoId,
      productoId,
      nombreProducto,
      cantidad,
      tipoProducto,
      tipoPrecio,
      managerPrecioId,
      descripcionPrecio,
      literalUnidadMedida,
      precioProducto,
      sumatoriaPrecioProducto,
      fechaUltimaCompra,
      usuarioUltimaCompra,
    } = data;

    const almacen = await Almacen.findOne(
      {
        empresaId,
        establecimientoId,
        productoId,
        literalUnidadMedida
      })
      const historicoAlmacen = await HistoricoAlmacen.findOne(
        {
          empresaId,
          establecimientoId,
          productoId,
          literalUnidadMedida
        })
  
      if(!almacen){
        const almacen2 = Almacen.build({
          descripcion,
          empresaId,
          establecimientoId,
          productoId,
          nombreProducto,
          cantidad,
          tipoProducto,
          tipoPrecio,
          managerPrecioId,
          descripcionPrecio,
          literalUnidadMedida,
          precioProducto,
          sumatoriaPrecioProducto,
          fechaUltimaCompra,
          usuarioUltimaCompra,
        });
        await almacen2.save();

        const historicoAlmacen2 = HistoricoAlmacen.build({
          id:almacen2.id,
          descripcion:almacen2.descripcion,
          empresaId:almacen2.empresaId,
          establecimientoId:almacen2.establecimientoId,
          productoId:almacen2.productoId,
          nombreProducto:almacen2.nombreProducto,
          cantidad:almacen2.cantidad,
          tipoProducto:almacen2.tipoProducto,
          tipoPrecio:almacen2.tipoPrecio,
          managerPrecioId:almacen2.managerPrecioId,
          descripcionPrecio:almacen2.descripcionPrecio,
          literalUnidadMedida:almacen2.literalUnidadMedida,
          precioProducto:almacen2.precioProducto,
          sumatoriaPrecioProducto:almacen2.sumatoriaPrecioProducto,
          fechaUltimaCompra:almacen2.fechaUltimaCompra,
          usuarioUltimaCompra:almacen2.usuarioUltimaCompra,
        });
        await historicoAlmacen2.save();

        await new PublicadorAlmacenCreado(natsWrapper.client).publish({
          id: almacen2.id,
          descripcion: almacen2.descripcion,
          empresaId: almacen2.empresaId,
          establecimientoId: almacen2.establecimientoId,
          productoId: almacen2.productoId,
          nombreProducto: almacen2.nombreProducto,
          cantidad: almacen2.cantidad,
          tipoProducto: almacen2.tipoProducto,
          tipoPrecio: almacen2.tipoPrecio,
          managerPrecioId: almacen2.managerPrecioId,
          descripcionPrecio: almacen2.descripcionPrecio,
          literalUnidadMedida: almacen2.literalUnidadMedida,
          precioProducto: almacen2.precioProducto,
          sumatoriaPrecioProducto: almacen2.sumatoriaPrecioProducto,
          fechaUltimaCompra: almacen2.fechaUltimaCompra,
          usuarioUltimaCompra: almacen2.usuarioUltimaCompra,
        });

      }else{
        const cantidadAux = almacen.cantidad;
        const sumatoriaPrecioProductoAux = almacen.sumatoriaPrecioProducto;
        almacen.set({
          cantidad: cantidadAux + cantidad,
          precioProducto,
          sumatoriaPrecioProducto: sumatoriaPrecioProductoAux + sumatoriaPrecioProducto,
          fechaUltimaCompra,
          usuarioUltimaCompra,
        })
        await almacen.save();

        historicoAlmacen!.set({
          cantidad: cantidadAux + cantidad,
          precioProducto,
          sumatoriaPrecioProducto: sumatoriaPrecioProductoAux + sumatoriaPrecioProducto,
          fechaUltimaCompra,
          usuarioUltimaCompra,
        });
        await historicoAlmacen!.save()

        await new PublicadorAlmacenActualizado(natsWrapper.client).publish({
          id:almacen.id,
          descripcion: almacen.descripcion,
          empresaId: almacen.empresaId,
          establecimientoId: almacen.establecimientoId,
          productoId: almacen.productoId,
          nombreProducto: almacen.nombreProducto,
          cantidad: almacen.cantidad,
          tipoProducto: almacen.tipoProducto,
          tipoPrecio: almacen.tipoPrecio,
          managerPrecioId: almacen.managerPrecioId,
          descripcionPrecio: almacen.descripcionPrecio,
          literalUnidadMedida: almacen.literalUnidadMedida,
          precioProducto: almacen.precioProducto,
          sumatoriaPrecioProducto: almacen.sumatoriaPrecioProducto,
          fechaUltimaCompra: almacen.fechaUltimaCompra,
          usuarioUltimaCompra: almacen.usuarioUltimaCompra,
          version: almacen.version
        });
      }

    msj.ack();
  }
}

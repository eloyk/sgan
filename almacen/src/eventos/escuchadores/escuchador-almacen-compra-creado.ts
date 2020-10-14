import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearAlmacenCompra,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { Almacen } from '../../models/almacen';

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
      }else{
        const cantidadAux = almacen.cantidad;
        const sumatoriaPrecioProductoAux = almacen.sumatoriaPrecioProducto;
        almacen.set({
          cantidad: cantidadAux+cantidad,
          precioProducto,
          sumatoriaPrecioProducto: sumatoriaPrecioProductoAux+sumatoriaPrecioProducto,
          fechaUltimaCompra,
          usuarioUltimaCompra,
        })
        await almacen.save();
      }

    msj.ack();
  }
}

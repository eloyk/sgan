import { Message } from 'node-nats-streaming';
import {
  Adjuntos,
  Escuchador,
  EventoCrearFactura,
  Compra,
  EstadoCompra,
  ErrorNoEncontrado,
  UnidadMedida,
} from '@eloyk/comun';
import { nombreGrupoCola } from './nombre-grupo-cola';
import { PublicadoAlmacenCompraCreado } from '../publicadores/publicador-almacen-compra-creado';
import { natsWrapper } from '../../nats-wrapper';

export class EscuchadorFacturaCreada extends Escuchador<EventoCrearFactura> {
  adjunto: Adjuntos.FacturaCreada = Adjuntos.FacturaCreada;
  nombreGrupoCola = nombreGrupoCola;

  async onMessage(data: EventoCrearFactura['data'], msj: Message) {
    const { facturaId, compraId } = data;

    const compra = await Compra.findById(compraId)
                               .populate('producto')
                               .populate('empresa')
                               .populate('establecimiento')
                               .populate('proveedor');

    if (!compra) {
      return new ErrorNoEncontrado();
    }

    compra.set({
      facturaId: facturaId,
      estadoCompra: EstadoCompra.Completa,
    });

    await compra.save();
    
    for (let buscarCompra in compra!.producto) {
      let buscarProducto = compra!.producto[buscarCompra];
      const unidadmedida = await UnidadMedida.findById(buscarProducto.unidadMedidaId);

      await new PublicadoAlmacenCompraCreado(natsWrapper.client).publish({
        descripcion:compra.establecimiento.descripcion,
        empresaId:compra.empresa.id,
        establecimientoId:compra.establecimiento.id,
        productoId:buscarProducto.productoId,
        nombreProducto:buscarProducto.descripcionProducto,
        cantidad:buscarProducto.cantidadProducto,
        tipoProducto:buscarProducto.tipoProducto,
        tipoPrecio:buscarProducto.tipoPrecio,
        managerPrecioId:buscarProducto.manejadorPrecioId,
        descripcionPrecio:buscarProducto.descripcionManejadorPrecio,
        literalUnidadMedida:unidadmedida!.literal,
        precioProducto:buscarProducto.precioProducto,
        sumatoriaPrecioProducto:buscarProducto.sumatoriaPrecioProducto!,
        fechaUltimaCompra:compra.fechaAlta!,
        usuarioUltimaCompra:compra.emailUsuarioAlta!,
      });
  }

    msj.ack();
  }
}

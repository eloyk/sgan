import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Almacen, requireAuth, validarSolicitud } from '@eloyk/comun';
import { Stock } from '../models/stock';
import { PublicadorAlmacenStockActualizado } from '../eventos/publicadores/publicador-almacen-stock-actualizado';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/stock',
  requireAuth,
  [
    body('establecimientoId')
      .not()
      .isEmpty()
      .withMessage('El establecimiento del stock es requerido'),
  ],
  validarSolicitud,
  async (req: Request, res: Response) => {
    const {
      establecimientoId,
      productoId,
      producto,
      cantidad,
      cantidadEquivalente,
      tipoPrecio,
      managerPrecioId,
      descripcionPrecio,
      literalUnidad,
      precioProducto,
 } = req.body;

 const stock = await Stock.findOne(
  {
    empresaId: req.usuarioActual!.empresaId,
    establecimientoId,
    productoId,
    literalUnidad
  })

  const almacen = await Almacen.findOne({
    empresaId: req.usuarioActual!.empresaId,
    establecimientoId,
    productoId,
    literalUnidadMedida: literalUnidad
  })

  if (!stock) {
    const stock2 = Stock.build({
      empresaId: req.usuarioActual!.empresaId,
      establecimientoId,
      productoId,
      producto,
      cantidad: cantidadEquivalente,
      tipoPrecio,
      managerPrecioId,
      descripcionPrecio,
      literalUnidad,
      precioProducto,
      sumatoria: cantidadEquivalente * precioProducto,
      usuarioUltimaCompra: req.usuarioActual!.email,
    });

    await stock2!.save();

    const cantidadAux = almacen!.cantidad;
    const sumatoriaPrecioProductoAux = almacen!.sumatoriaPrecioProducto;
    const sumatoriaAux = cantidad * almacen!.precioProducto;
    almacen!.set({
      cantidad: cantidadAux - cantidad,
      precioProducto,
      sumatoriaPrecioProducto: sumatoriaPrecioProductoAux - sumatoriaAux,
      fechaUltimaCompra: stock2.fechaUltimaCompra,
      usuarioUltimaCompra: stock2.usuarioUltimaCompra,
    })
    await almacen!.save();

    await new PublicadorAlmacenStockActualizado(natsWrapper.client).publish({
            id: almacen!.id,
            descripcion: almacen!.descripcion,
            empresaId: almacen!.empresaId,
            establecimientoId: almacen!.establecimientoId,
            productoId: almacen!.productoId,
            nombreProducto: almacen!.nombreProducto,
            cantidad: almacen!.cantidad,
            tipoProducto: almacen!.tipoProducto,
            tipoPrecio: almacen!.tipoPrecio,
            managerPrecioId: almacen!.managerPrecioId,
            descripcionPrecio: almacen!.descripcionPrecio,
            literalUnidadMedida: almacen!.literalUnidadMedida,
            precioProducto: almacen!.precioProducto,
            sumatoriaPrecioProducto: almacen!.sumatoriaPrecioProducto,
            fechaUltimaCompra: almacen!.fechaUltimaCompra,
            usuarioUltimaCompra: almacen!.usuarioUltimaCompra,
            version: almacen!.version
        })

  } else{
    const cantidadAuxStock = stock!.cantidad + cantidadEquivalente;
    const cantidadPrecioAux = stock!.precioProducto * cantidadAuxStock 
    const sumatoriaAuxStock = stock!.sumatoria + cantidadPrecioAux;
    stock!.set({
      cantidad: cantidadAuxStock,
      precioProducto,
      sumatoria: sumatoriaAuxStock,
      usuarioUltimaCompra: req.usuarioActual!.email,
      fechaUltimaCompra: Date.now
      })
      await stock!.save();

      const cantidadAux = almacen!.cantidad;
      const sumatoriaPrecioProductoAux = almacen!.sumatoriaPrecioProducto;
      const sumatoriaAux = cantidad * almacen!.precioProducto;
      almacen!.set({
        cantidad: cantidadAux - cantidad,
        precioProducto,
        sumatoriaPrecioProducto: sumatoriaPrecioProductoAux - sumatoriaAux,
        fechaUltimaCompra: stock.fechaUltimaCompra,
        usuarioUltimaCompra: stock.usuarioUltimaCompra,
      })
      await almacen!.save();
  
      await new PublicadorAlmacenStockActualizado(natsWrapper.client).publish({
              id: almacen!.id,
              descripcion: almacen!.descripcion,
              empresaId: almacen!.empresaId,
              establecimientoId: almacen!.establecimientoId,
              productoId: almacen!.productoId,
              nombreProducto: almacen!.nombreProducto,
              cantidad: almacen!.cantidad,
              tipoProducto: almacen!.tipoProducto,
              tipoPrecio: almacen!.tipoPrecio,
              managerPrecioId: almacen!.managerPrecioId,
              descripcionPrecio: almacen!.descripcionPrecio,
              literalUnidadMedida: almacen!.literalUnidadMedida,
              precioProducto: almacen!.precioProducto,
              sumatoriaPrecioProducto: almacen!.sumatoriaPrecioProducto,
              fechaUltimaCompra: almacen!.fechaUltimaCompra,
              usuarioUltimaCompra: almacen!.usuarioUltimaCompra,
              version: almacen!.version
          })
     }

    res.status(201).send(stock);
  }
);

export { router as crearStockRouter };

import mongoose from 'mongoose';

export interface AtribHistoricoAlmacen {
  id: string;
  descripcion: string;
  empresaId: string;
  establecimientoId: string;
  productoId: string;
  nombreProducto: string;
  cantidad: number;
  tipoProducto: string;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidadMedida: string;
  precioProducto: number;
  sumatoriaPrecioProducto: number;
  fechaUltimaCompra: Date;
  usuarioUltimaCompra: string;
}

export interface DocHistoricoAlmacen extends mongoose.Document {
  descripcion: string;
  empresaId: string;
  establecimientoId: string;
  productoId: string;
  nombreProducto: string;
  cantidad: number;
  tipoProducto: string;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidadMedida: string;
  precioProducto: number;
  sumatoriaPrecioProducto: number;
  fechaUltimaCompra: Date;
  usuarioUltimaCompra: string;
}

interface ModelHistoricoAlmacen extends mongoose.Model<DocHistoricoAlmacen> {
  build(atrib: AtribHistoricoAlmacen): DocHistoricoAlmacen;
}

const schemaHistoricoAlmacen = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    empresaId: {
      type: String,
      required: true,
    },
    establecimientoId: {
      type: String,
      required: true,
    },
    productoId: {
      type: String,
      required: true,
    },
    nombreProducto: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    tipoPrecio: {
      type: String,
      required: true,
    },
    managerPrecioId: {
      type: String,
      required: true,
    },
    descripcionPrecio: {
      type: String,
      required: true,
    },
    literalUnidadMedida: {
      type: String,
      required: true,
    },
    precioProducto: {
      type: Number,
      required: true,
    },
    sumatoriaPrecioProducto: {
      type: Number,
      required: true,
    },
    fechaUltimaCompra: {
      type: Date,
      required: true,
    },
    usuarioUltimaCompra: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

schemaHistoricoAlmacen.statics.build = (atrib: AtribHistoricoAlmacen) => {
  return new HistoricoAlmacen({
    _id: atrib.id,
    descripcion: atrib.descripcion,
    empresaId: atrib.empresaId,
    establecimientoId: atrib.establecimientoId,
    productoId: atrib.productoId,
    nombreProducto: atrib.nombreProducto,
    cantidad: atrib.cantidad,
    tipoProducto: atrib.tipoProducto,
    tipoPrecio: atrib.tipoPrecio,
    managerPrecioId: atrib.managerPrecioId,
    descripcionPrecio: atrib.descripcionPrecio,
    literalUnidadMedida: atrib.literalUnidadMedida,
    precioProducto: atrib.precioProducto,
    sumatoriaPrecioProducto: atrib.sumatoriaPrecioProducto,
    fechaUltimaCompra: atrib.fechaUltimaCompra,
    usuarioUltimaCompra: atrib.usuarioUltimaCompra,
  });
};

const HistoricoAlmacen = mongoose.model<DocHistoricoAlmacen, ModelHistoricoAlmacen>(
  'HistoricoAlmacen',
  schemaHistoricoAlmacen
);

export { HistoricoAlmacen };

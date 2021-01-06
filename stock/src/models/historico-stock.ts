import mongoose from 'mongoose';

export interface AtribHistoricoStock {
  id: string;
  empresaId: string;
  establecimientoId: string;
  productoId: string;
  producto: string;
  cantidad: number;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidad: string;
  precioProducto: number;
  sumatoria: number;
  fechaUltimaCompra?: Date;
  usuarioUltimaCompra: string;
}

export interface DocHistoricoStock extends mongoose.Document {
  empresaId: string;
  establecimientoId: string;
  productoId: string;
  producto: string;
  cantidad: number;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidad: string;
  precioProducto: number;
  sumatoria: number;
  fechaUltimaCompra?: Date;
  usuarioUltimaCompra: string;
}

interface ModelHistoricoStock extends mongoose.Model<DocHistoricoStock> {
  build(atrib: AtribHistoricoStock): DocHistoricoStock;
}

const schemaHistoricoStock = new mongoose.Schema(
  {
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
    producto: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
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
    literalUnidad: {
      type: String,
      required: true,
    },
    precioProducto: {
      type: Number,
      required: true,
    },
    sumatoria: {
      type: Number,
      required: true,
    },
    fechaUltimaCompra: {
      type: Date,
      default: Date.now,
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

schemaHistoricoStock.statics.build = (atrib: AtribHistoricoStock) => {
  return new HistoricoStock({
    _id: atrib.id,
    empresaId: atrib.empresaId,
    establecimientoId: atrib.establecimientoId,
    productoId: atrib.productoId,
    producto: atrib.producto,
    cantidad: atrib.cantidad,
    tipoPrecio: atrib.tipoPrecio,
    managerPrecioId: atrib.managerPrecioId,
    descripcionPrecio: atrib.descripcionPrecio,
    literalUnidad: atrib.literalUnidad,
    precioProducto: atrib.precioProducto,
    sumatoria: atrib.sumatoria,
    fechaUltimaCompra: atrib.fechaUltimaCompra,
    usuarioUltimaCompra: atrib.usuarioUltimaCompra,
    });
};

const HistoricoStock = mongoose.model<DocHistoricoStock, ModelHistoricoStock>(
  'HistoricoStock',
  schemaHistoricoStock
);

export { HistoricoStock };

import mongoose from 'mongoose';

export interface AtribStock {
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

export interface DocStock extends mongoose.Document {
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

interface ModelStock extends mongoose.Model<DocStock> {
  build(atrib: AtribStock): DocStock;
}

const schemaStock = new mongoose.Schema(
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
      type: mongoose.Schema.Types.Date,
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

schemaStock.statics.build = (atrib: AtribStock) => {
  return new Stock({
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
    usuarioUltimaCompra: atrib.usuarioUltimaCompra,
    });
};

const Stock = mongoose.model<DocStock, ModelStock>(
  'Stock',
  schemaStock
);

export { Stock };

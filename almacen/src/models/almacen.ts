import mongoose from 'mongoose';

export interface AtribAlmacen {
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

export interface DocAlmacen extends mongoose.Document {
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

interface ModelAlmacen extends mongoose.Model<DocAlmacen> {
  build(atrib: AtribAlmacen): DocAlmacen;
}

const schemaAlmacen = new mongoose.Schema(
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

schemaAlmacen.statics.build = (atrib: AtribAlmacen) => {
  return new Almacen(atrib);
};

const Almacen = mongoose.model<DocAlmacen, ModelAlmacen>(
  'Almacen',
  schemaAlmacen
);

export { Almacen };

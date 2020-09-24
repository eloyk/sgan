import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface AtribProductoCompraTMP {
  id?: string;
  productoId: string;
  descripcionProducto: string;
  tipoProducto: string;
  unidadMedidaId: string;
  literal: string;
  manejadorPrecioId: string;
  descripcionManejadorPrecio: string;
  tipoPrecio: string;
  precioProducto: number;
  cantidadProducto: number;
  sumatoriaPrecioProducto?: number;
  empresaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
}

export interface DocProductoCompra extends mongoose.Document {
  productoId: string;
  descripcionProducto: string;
  tipoProducto: string;
  unidadMedidaId: string;
  literal: string;
  manejadorPrecioId: string;
  descripcionManejadorPrecio: string;
  tipoPrecio: string;
  precioProducto: number;
  cantidadProducto: number;
  sumatoriaPrecioProducto?: number;
  empresaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  version: number;
}

interface ModelProductoCompraTMP extends mongoose.Model<DocProductoCompra> {
  build(atrib: AtribProductoCompraTMP): DocProductoCompra;
}

const schemaProductoCompraTMP = new mongoose.Schema(
  {
    productoId: {
      type: String,
      required: true,
    },
    descripcionProducto: {
      type: String,
      required: true,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    unidadMedidaId: {
      type: String,
      required: true,
    },
    literal: {
      type: String,
      required: true,
    },
    manejadorPrecioId: {
      type: String,
      required: true,
    },
    descripcionManejadorPrecio: {
      type: String,
      required: true,
    },
    tipoPrecio: {
      type: String,
      required: true,
    },
    precioProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    cantidadProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    sumatoriaPrecioProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    empresaId: {
      type: String,
      required: true,
    },
    usuarioIdAlta: {
      type: String,
      required: true,
    },
    emailUsuarioAlta: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.empresaId;
      },
    },
  }
);
schemaProductoCompraTMP.set('versionKey', 'version');
schemaProductoCompraTMP.plugin(updateIfCurrentPlugin);

schemaProductoCompraTMP.statics.findByEvent = (evento: {
  id: string;
  version: number;
}) => {
  return ProductoCompraTMP.findOne({
    _id: evento.id,
    version: evento.version - 1,
  });
};

schemaProductoCompraTMP.statics.build = (atrib: AtribProductoCompraTMP) => {
  return new ProductoCompraTMP({
    _id: atrib.id,
    productoId: atrib.productoId,
    descripcionProducto: atrib.descripcionProducto,
    tipoProducto: atrib.tipoProducto,
    unidadMedidaId: atrib.unidadMedidaId,
    literal: atrib.literal,
    manejadorPrecioId: atrib.manejadorPrecioId,
    descripcionManejadorPrecio: atrib.descripcionManejadorPrecio,
    tipoPrecio: atrib.tipoPrecio,
    precioProducto: atrib.precioProducto,
    cantidadProducto: atrib.cantidadProducto,
    sumatoriaPrecioProducto: atrib.sumatoriaPrecioProducto,
    empresaId: atrib.empresaId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const ProductoCompraTMP = mongoose.model<
  DocProductoCompra,
  ModelProductoCompraTMP
>('ProductoCompraTMP', schemaProductoCompraTMP);

export { ProductoCompraTMP };

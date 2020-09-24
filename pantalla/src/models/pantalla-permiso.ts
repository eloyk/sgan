import mongoose from 'mongoose';

interface AtribProductoCategoria {
  id: string;
  descripcion: string;
  codigoBarra?: string;
  tipoProducto: string;
  urlImagen?: string;
  empresaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocProductoCategoria extends mongoose.Document {
  descripcion: string;
  codigoBarra?: string;
  tipoProducto: string;
  urlImagen?: string;
  empresaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
  version: number;
}

interface ModelProductoCategoria extends mongoose.Model<DocProductoCategoria> {
  build(atrib: AtribProductoCategoria): DocProductoCategoria;
}

const schemaProducto = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    codigoBarra: {
      type: String,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    urlImagen: {
      type: String,
    },
    empresaId: {
      type: String,
      required: true,
    },
    usuarioIdAlta: {
      type: String,
    },
    emailUsuarioAlta: {
      type: String,
    },
    fechaAlta: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
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

schemaProducto.statics.build = (atrib: AtribProductoCategoria) => {
  return new ProductoCategoria({
    _id: atrib.id,
    descripcion: atrib.descripcion,
    codigoBarra: atrib.codigoBarra,
    tipoProducto: atrib.tipoProducto,
    urlImagen: atrib.urlImagen,
    empresaId: atrib.empresaId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const ProductoCategoria = mongoose.model<
  DocProductoCategoria,
  ModelProductoCategoria
>('ProductoCategoria', schemaProducto);

export { ProductoCategoria };

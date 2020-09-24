import mongoose from 'mongoose';
import { DocProductoCategoria } from './producto-categoria';

export interface AtribCategoria {
  descripcion: string;
  producto?: [DocProductoCategoria];
}

export interface DocCategoria extends mongoose.Document {
  descripcion: string;
  producto?: [DocProductoCategoria];
}

interface ModelCategoria extends mongoose.Model<DocCategoria> {
  build(atrib: AtribCategoria): DocCategoria;
}

const schemaCategoria = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    producto: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductoCategoria',
      },
    ],
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

schemaCategoria.statics.build = (atrib: AtribCategoria) => {
  return new Categoria({
    descripcion: atrib.descripcion,
    producto: atrib.producto,
  });
};

const Categoria = mongoose.model<DocCategoria, ModelCategoria>(
  'Categoria',
  schemaCategoria
);

export { Categoria };

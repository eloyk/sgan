import mongoose from 'mongoose';
import { DocCampo } from './campo';

interface AtribPantalla {
  descripcion: string;
  tipo: string;
  campo?: [DocCampo];
}

export interface DocPantalla extends mongoose.Document {
  descripcion: string;
  tipo: string;
  campo?: [DocCampo];
}

interface ModeloPantalla extends mongoose.Model<DocPantalla> {
  build(atrib: AtribPantalla): DocPantalla;
}

const SchemaPantalla = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    campo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campo',
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

SchemaPantalla.statics.build = (atrib: AtribPantalla) => {
  return new Pantalla(atrib);
};

const Pantalla = mongoose.model<DocPantalla, ModeloPantalla>(
  'Pantalla',
  SchemaPantalla
);

export { Pantalla };

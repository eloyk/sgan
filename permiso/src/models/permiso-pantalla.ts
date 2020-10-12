import mongoose from 'mongoose';
import { DocPantalla } from './pantalla';
import { DocPerfil } from './perfil';
import { DocPermisoCampo } from './permiso-campo';

interface AtribPermisoPantalla {
  pantalla: DocPantalla;
  permisoCampo:DocPermisoCampo;
  perfil: DocPerfil;
  ver: boolean;
}

interface DocPermisoPantalla extends mongoose.Document {
  pantalla: DocPantalla;
  permisoCampo:DocPermisoCampo;
  perfil: DocPerfil;
  ver: boolean;
}

interface ModeloPermisoPantalla extends mongoose.Model<DocPermisoPantalla> {
  build(atrib: AtribPermisoPantalla): DocPermisoPantalla;
}

const SchemaPermisoPantalla = new mongoose.Schema(
  {
    pantalla: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pantalla',
    },
    permisoCampo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PermisoCampo',
    },
    perfil: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Perfil',
    },
    ver: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

SchemaPermisoPantalla.statics.build = (atrib: AtribPermisoPantalla) => {
  return new PermisoPantalla(atrib);
};

const PermisoPantalla = mongoose.model<
  DocPermisoPantalla,
  ModeloPermisoPantalla
>('PermisoPantalla', SchemaPermisoPantalla);

export { PermisoPantalla };

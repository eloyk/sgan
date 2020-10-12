import mongoose from 'mongoose';
import { DocCampo } from './campo';
import { DocPerfil } from './perfil';

interface AtribPermisoCampo {
  campo: DocCampo;
  perfil: DocPerfil;
  ver: boolean;
  modificar: boolean;
}

export interface DocPermisoCampo extends mongoose.Document {
  campo: DocCampo;
  perfil: DocPerfil;
  ver: boolean;
  modificar: boolean;
}

interface ModeloPermisoCampo extends mongoose.Model<DocPermisoCampo> {
  build(atrib: AtribPermisoCampo): DocPermisoCampo;
}

const SchemaPermisoCampo = new mongoose.Schema(
  {
    campo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campo',
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
    modificar: {
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

SchemaPermisoCampo.statics.build = (atrib: AtribPermisoCampo) => {
  return new PermisoCampo(atrib);
};

const PermisoCampo = mongoose.model<DocPermisoCampo, ModeloPermisoCampo>(
  'PermisoCampo',
  SchemaPermisoCampo
);

export { PermisoCampo };

import mongoose from 'mongoose';

interface AtribPerfil {
  descripcion: string;
  usuarioCreador: string;
  emailCreador: string;
  empresaId: string;
}

export interface DocPerfil extends mongoose.Document {
  descripcion: string;
  usuarioCreador: string;
  emailCreador: string;
  empresaId: string;
}

interface ModeloPerfil extends mongoose.Model<DocPerfil> {
  build(atrib: AtribPerfil): DocPerfil;
}

const SchemaPerfil = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    usuarioCreador: {
      type: String,
      required: true,
    },
    emailCreador: {
      type: String,
      required: true,
    },
    empresaId: {
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

SchemaPerfil.statics.build = (atrib: AtribPerfil) => {
  return new Perfil(atrib);
};

const Perfil = mongoose.model<DocPerfil, ModeloPerfil>('Perfil', SchemaPerfil);

export { Perfil };

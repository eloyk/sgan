import mongoose from 'mongoose';
import { DocumentoUsuario } from './usuario';
import { DocPerfil } from './perfil';

interface AtribAsignacionUsuario {
  descripcion: string;
  usuario: DocumentoUsuario;
  perfil: DocPerfil;
}

interface DocAsignacionUsuario extends mongoose.Document {
  descripcion: string;
  usuario: DocumentoUsuario;
  perfil: DocPerfil;
}

interface ModeloAsignacionUsuario extends mongoose.Model<DocAsignacionUsuario> {
  build(atrib: AtribAsignacionUsuario): DocAsignacionUsuario;
}

const SchemaAsignacionUsuario = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
    perfil: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Perfil',
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

SchemaAsignacionUsuario.statics.build = (atrib: AtribAsignacionUsuario) => {
  return new AsignacionUsuario(atrib);
};

const AsignacionUsuario = mongoose.model<
  DocAsignacionUsuario,
  ModeloAsignacionUsuario
>('AsignacionUsuario', SchemaAsignacionUsuario);

export { AsignacionUsuario };

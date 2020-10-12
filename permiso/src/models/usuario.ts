import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface AtribUsuario {
  id: string;
  email: string;
  password: string;
  nombreEmpresa?: string;
  empresaId?: string;
  establecimientoId?: string;
  superUsuario?: boolean;
  estadoUsuario?: boolean;
}

export interface DocumentoUsuario extends mongoose.Document {
  email: string;
  password: string;
  nombreEmpresa?: string;
  empresaId?: string;
  establecimientoId?: string;
  superUsuario?: boolean;
  estadoUsuario?: boolean;
  version: number;
}

interface ModeloUsuario extends mongoose.Model<DocumentoUsuario> {
  build(atrib: AtribUsuario): DocumentoUsuario;
  findByEvent(event: {
    id: string;
    version: number;
  }): Promise<DocumentoUsuario | null>;
}

const SchemaUsuario = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nombreEmpresa: {
      type: String,
    },
    empresaId: {
      type: String,
    },
    establecimientoId: {
      type: String,
    },
    superUsuario: {
      type: Boolean,
      default: false,
    },
    estadoUsuario: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

SchemaUsuario.set('versionKey', 'version');
SchemaUsuario.plugin(updateIfCurrentPlugin);

SchemaUsuario.statics.findByEvent = (evento: {
  id: string;
  version: number;
}) => {
  return Usuario.findOne({
    _id: evento.id,
    version: evento.version - 1,
  });
};

SchemaUsuario.statics.build = (atrib: AtribUsuario) => {
  return new Usuario({
    _id: atrib.id,
    email: atrib.email,
    password: atrib.password,
    nombreEmpresa: atrib.nombreEmpresa,
    empresaId: atrib.empresaId,
    establecimientoId: atrib.establecimientoId,
    superUsuario: atrib.superUsuario,
    estadoUsuario: atrib.estadoUsuario,
  });
};

const Usuario = mongoose.model<DocumentoUsuario, ModeloUsuario>(
  'Usuario',
  SchemaUsuario
);

export { Usuario };

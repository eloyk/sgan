import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// that are requried to create a new User
interface AtribUsuario {
  email: string;
  password: string;
  nombreEmpresa?: string;
  empresaId?: string;
  establecimientoId?: string;
  perfilDescripcion?: string;
  perfilId?: string;
  superUsuario?: boolean;
  estadoUsuario?: boolean;
}

// An interface that describes the properties
// that a User Model has
interface ModeloUsuario extends mongoose.Model<DocumentoUsuario> {
  build(atrib: AtribUsuario): DocumentoUsuario;
}

// An interface that describes the properties
// that a User Document has
interface DocumentoUsuario extends mongoose.Document {
  email: string;
  password: string;
  nombreEmpresa?: string;
  empresaId?: string;
  establecimientoId?: string;
  perfilDescripcion?: string;
  perfilId?: string;
  superUsuario?: boolean;
  estadoUsuario?: boolean;
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
    perfilDescripcion: {
      type: String,
    },
    perfilId: {
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
        delete ret.__v;
      },
    },
  }
);

SchemaUsuario.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

SchemaUsuario.statics.build = (atrib: AtribUsuario) => {
  return new Usuario(atrib);
};

const Usuario = mongoose.model<DocumentoUsuario, ModeloUsuario>(
  'Usuario',
  SchemaUsuario
);

export { Usuario };

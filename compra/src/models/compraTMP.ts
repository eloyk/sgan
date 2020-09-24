import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { EstadoCompra, DocEmpresa, DocProveedor } from '@eloyk/comun';
import { DocProductoCompra } from './producto-compraTMP';

interface AtribCompraTMP {
  empresa: DocEmpresa;
  proveedor: DocProveedor;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalCompra?: number;
  expiracion: Date;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface DocCompraTMP extends mongoose.Document {
  empresa: DocEmpresa;
  proveedor: DocProveedor;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalCompra?: number;
  expiracion: Date;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
  version: number;
}

interface ModelCompraTMP extends mongoose.Model<DocCompraTMP> {
  build(atrib: AtribCompraTMP): DocCompraTMP;
  findByEvent(event: {
    id: string;
    version: number;
  }): Promise<DocCompraTMP | null>;
}

const schemaCompraTMP = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Empresa',
    },
    proveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proveedor',
    },
    estadoCompra: {
      type: String,
      required: true,
      enum: Object.values(EstadoCompra),
      default: EstadoCompra.Creada,
    },
    productoCompraTMP: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductoCompraTMP',
      },
    ],
    contadorProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    totalCompra: {
      type: Number,
      required: true,
      default: 0,
    },
    expiracion: {
      type: mongoose.Schema.Types.Date,
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
      },
    },
  }
);
schemaCompraTMP.set('versionKey', 'version');
schemaCompraTMP.plugin(updateIfCurrentPlugin);

schemaCompraTMP.statics.findByEvent = (evento: {
  id: string;
  version: number;
}) => {
  return CompraTMP.findOne({
    _id: evento.id,
    version: evento.version - 1,
  });
};

schemaCompraTMP.statics.build = (atrib: AtribCompraTMP) => {
  return new CompraTMP({
    empresa: atrib.empresa,
    proveedor: atrib.proveedor,
    estadoCompra: atrib.estadoCompra,
    productoCompraTMP: atrib.productoCompraTMP,
    contadorProducto: atrib.contadorProducto,
    totalCompra: atrib.totalCompra,
    expiracion: atrib.expiracion,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const CompraTMP = mongoose.model<DocCompraTMP, ModelCompraTMP>(
  'CompraTMP',
  schemaCompraTMP
);

export { CompraTMP };

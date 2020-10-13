import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { EstadoCompra, DocEmpresa, DocCliente, DocEstablecimiento } from '@eloyk/comun';
import { DocProductoCompra } from './producto-compraTMP';

interface AtribVentaTMP {
  empresa: DocEmpresa;
  establecimiento: DocEstablecimiento;
  cliente: DocCliente;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalVenta?: number;
  expiracion: Date;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface DocVentaTMP extends mongoose.Document {
  empresa: DocEmpresa;
  establecimiento: DocEstablecimiento;
  cliente: DocCliente;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalVenta?: number;
  expiracion: Date;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
  version: number;
}

interface ModelVentaTMP extends mongoose.Model<DocVentaTMP> {
  build(atrib: AtribVentaTMP): DocVentaTMP;
  findByEvent(event: {
    id: string;
    version: number;
  }): Promise<DocVentaTMP | null>;
}

const schemaVentaTMP = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Empresa',
    },
    establecimiento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Establecimiento',
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
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
    totalVenta: {
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
schemaVentaTMP.set('versionKey', 'version');
schemaVentaTMP.plugin(updateIfCurrentPlugin);

schemaVentaTMP.statics.findByEvent = (evento: {
  id: string;
  version: number;
}) => {
  return VentaTMP.findOne({
    _id: evento.id,
    version: evento.version - 1,
  });
};

schemaVentaTMP.statics.build = (atrib: AtribVentaTMP) => {
  return new VentaTMP({
    empresa: atrib.empresa,
    establecimiento: atrib.establecimiento,
    cliente: atrib.cliente,
    estadoCompra: atrib.estadoCompra,
    productoCompraTMP: atrib.productoCompraTMP,
    contadorProducto: atrib.contadorProducto,
    totalVenta: atrib.totalVenta,
    expiracion: atrib.expiracion,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const VentaTMP = mongoose.model<DocVentaTMP, ModelVentaTMP>(
  'ventaTMP',
  schemaVentaTMP
);

export { VentaTMP };

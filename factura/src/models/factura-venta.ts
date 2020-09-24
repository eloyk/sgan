import mongoose from 'mongoose';
import { DocVenta } from '@eloyk/comun';

interface AtribFacturaVenta {
  venta: DocVenta;
  tipoFactura: string;
  descuento?: number;
  fechaAlta?: Date;
}

export interface DocFacturaVenta extends mongoose.Document {
  venta: DocVenta;
  tipoFactura: string;
  descuento?: number;
  fechaAlta?: Date;
}

interface ModelFacturaVenta extends mongoose.Model<DocFacturaVenta> {
  build(atrib: AtribFacturaVenta): DocFacturaVenta;
}

const schemaFacturaVenta = new mongoose.Schema(
  {
    venta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venta',
    },
    tipoFactura: {
      type: String,
      required: true,
    },
    descuento: {
      type: Number,
      default: 0,
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

schemaFacturaVenta.statics.build = (atrib: AtribFacturaVenta) => {
  return new FacturaVenta({
    venta: atrib.venta,
    tipoFactura: atrib.tipoFactura,
    descuento: atrib.descuento,
  });
};

const FacturaVenta = mongoose.model<DocFacturaVenta, ModelFacturaVenta>(
  'FacturaVenta',
  schemaFacturaVenta
);

export { FacturaVenta };

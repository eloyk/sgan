import mongoose from 'mongoose';
import { DocCompra } from '@eloyk/comun';

interface AtribFacturaCompra {
  compra: DocCompra;
  tipoFactura: string;
  descuento?: number;
  fechaAlta?: Date;
}

export interface DocFacturaCompra extends mongoose.Document {
  compra: DocCompra;
  tipoFactura: string;
  descuento?: number;
  fechaAlta?: Date;
}

interface ModelFacturaCompra extends mongoose.Model<DocFacturaCompra> {
  build(atrib: AtribFacturaCompra): DocFacturaCompra;
}

const schemaFacturaCompra = new mongoose.Schema(
  {
    compra: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Compra',
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

schemaFacturaCompra.statics.build = (atrib: AtribFacturaCompra) => {
  return new FacturaCompra({
    compra: atrib.compra,
    tipoFactura: atrib.tipoFactura,
    descuento: atrib.descuento,
  });
};

const FacturaCompra = mongoose.model<DocFacturaCompra, ModelFacturaCompra>(
  'FacturaCompra',
  schemaFacturaCompra
);

export { FacturaCompra };

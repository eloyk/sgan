import mongoose from 'mongoose';

interface AtribCampo {
  descripcion: string;
  tipo: string;
}

export interface DocCampo extends mongoose.Document {
  descripcion: string;
  tipo: string;
}

interface ModeloCampo extends mongoose.Model<DocCampo> {
  build(atrib: AtribCampo): DocCampo;
}

const SchemaCampo = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    tipo: {
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

SchemaCampo.statics.build = (atrib: AtribCampo) => {
  return new Campo(atrib);
};

const Campo = mongoose.model<DocCampo, ModeloCampo>('Campo', SchemaCampo);

export { Campo };

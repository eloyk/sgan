import mongoose from 'mongoose';
import { natsWrapper } from './nats-wrapper';
import { app } from './app';
import { EscuchadorAlmacenCompraCreado } from './eventos/escuchadores/escuchador-almacen-compra-creado';
import { EscuchadorAlmacenActulizado } from './eventos/escuchadores/escuchador-almacen-actualizado';
import { EscuchadorAlmacenStockActulizado } from './eventos/escuchadores/escuchador-almacen-stock-actualizado';

const iniciar = async () => {
  console.log('Iniciando servicio de almacen');

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY no esta definida');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI no esta definida');
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    new EscuchadorAlmacenCompraCreado(natsWrapper.client).listen();
    new EscuchadorAlmacenActulizado(natsWrapper.client).listen();
    new EscuchadorAlmacenStockActulizado(natsWrapper.client).listen();

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('conectado a MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
  });
};

iniciar();

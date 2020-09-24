import mongoose from 'mongoose';
import { natsWrapper } from './nats-wrapper';
import { app } from './app';
import { EscuchadorEmpresaCreada } from './eventos/escuchadores/escuchador-empresa-creada';
import { EscuchadorEmpresaActualizada } from './eventos/escuchadores/escuchador-empresa-actualizada';
import { EscuchadorCompraCreada } from './eventos/escuchadores/escuchador-compra-creada';
import { EscuchadorProveedorCreado } from './eventos/escuchadores/escuchador-proveedor-creado';
import { EscuchadorProveedorActulizado } from './eventos/escuchadores/escuchador-proveedor-actualizado';
import { EscuchadorProductoCompraCreado } from './eventos/escuchadores/escuchador-producto-compra-creado';
import { EscuchadorProductoCompraActualizado } from './eventos/escuchadores/escuchador-producto-compra-actualizada';
import { EscuchadorCompraCancelada } from './eventos/escuchadores/escuchador-compra-cancelada';
import { EscuchadorClienteActualizado } from './eventos/escuchadores/escuchador-cliente-actualizado';
import { EscuchadorClienteCreado } from './eventos/escuchadores/escuchador-cliente-creado';
import { EscuchadorVentaCreada } from './eventos/escuchadores/escuchador-venta-creada';
import { EscuchadorVentaCancelada } from './eventos/escuchadores/escuchador-venta-cancelada';

const iniciar = async () => {
  console.log('Iniciando servicio de compra');

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

    new EscuchadorEmpresaCreada(natsWrapper.client).listen();
    new EscuchadorEmpresaActualizada(natsWrapper.client).listen();
    new EscuchadorCompraCreada(natsWrapper.client).listen();
    new EscuchadorProveedorCreado(natsWrapper.client).listen();
    new EscuchadorProveedorActulizado(natsWrapper.client).listen();
    new EscuchadorProductoCompraCreado(natsWrapper.client).listen();
    new EscuchadorProductoCompraActualizado(natsWrapper.client).listen();
    new EscuchadorCompraCancelada(natsWrapper.client).listen();
    new EscuchadorClienteActualizado(natsWrapper.client).listen();
    new EscuchadorClienteCreado(natsWrapper.client).listen();
    new EscuchadorVentaCreada(natsWrapper.client).listen();
    new EscuchadorVentaCancelada(natsWrapper.client).listen();

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

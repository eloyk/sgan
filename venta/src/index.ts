import mongoose from 'mongoose';
import { natsWrapper } from './nats-wrapper';
import { app } from './app';
import { EscuchadorEmpresaCreada } from './eventos/escuchadores/escuchador-empresa-creada';
import { EscuchadorEmpresaActualizada } from './eventos/escuchadores/escuchador-empresa-actualizada';
import { EscuchadorUnidadMedidaCreada } from './eventos/escuchadores/escuchador-unidad-medida-creada';
import { EscuchadorUnidadMedidaActualizada } from './eventos/escuchadores/escuchador-unidad-medida-actualizada';
import { EscuchadorManejadorPrecioCreado } from './eventos/escuchadores/escuchador-manejador-precio-creado';
import { EscuchadorManejadorPrecioActualizado } from './eventos/escuchadores/escuchador-manejador-precio-actualizado';
import { EscuchadorProductoCreado } from './eventos/escuchadores/escuchador-producto-creado';
import { EscuchadorProductoActulizado } from './eventos/escuchadores/escuchador-producto-actualizado';
import { EscuchadorProductoUnidadMedidaCreado } from './eventos/escuchadores/escuchador-producto-unidad-medida-creado';
import { EscuchadorClienteCreado } from './eventos/escuchadores/escuchador-cliente-creado';
import { EscuchadorClienteActualizado } from './eventos/escuchadores/escuchador-cliente-actualizado';
import { EscuchadorExpiracionVentaCompleta } from './eventos/escuchadores/escuchador-expiracion-venta-completa';
import { EscuchadorFacturaVentaCreada } from './eventos/escuchadores/escuchador-factura-venta-creada';
import { EscuchadorEstablecimientoCreado } from './eventos/escuchadores/escuchador-establecimiento-creado';
import { EscuchadorEstablecimientoActualizado } from './eventos/escuchadores/escuchador-establecimiento-actualizado';

const iniciar = async () => {
  console.log('Iniciando servicio de venta');

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
    new EscuchadorEstablecimientoCreado(natsWrapper.client).listen();
    new EscuchadorEstablecimientoActualizado(natsWrapper.client).listen();
    new EscuchadorUnidadMedidaCreada(natsWrapper.client).listen();
    new EscuchadorUnidadMedidaActualizada(natsWrapper.client).listen();
    new EscuchadorManejadorPrecioCreado(natsWrapper.client).listen();
    new EscuchadorManejadorPrecioActualizado(natsWrapper.client).listen();
    new EscuchadorProductoCreado(natsWrapper.client).listen();
    new EscuchadorProductoActulizado(natsWrapper.client).listen();
    new EscuchadorProductoUnidadMedidaCreado(natsWrapper.client).listen();
    new EscuchadorClienteCreado(natsWrapper.client).listen();
    new EscuchadorClienteActualizado(natsWrapper.client).listen();
    new EscuchadorExpiracionVentaCompleta(natsWrapper.client).listen();
    new EscuchadorFacturaVentaCreada(natsWrapper.client).listen();

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

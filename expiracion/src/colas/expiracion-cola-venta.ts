import Queue from 'bull';
import { PublicadorExpiracionVentaCompleta } from '../eventos/publicadores/publicador-expiracion-venta-completa';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  ventaId: string;
}

const expiracionColaVenta = new Queue<Payload>('expiracion:venta', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expiracionColaVenta.process(async (job) => {
  new PublicadorExpiracionVentaCompleta(natsWrapper.client).publish({
    ventaId: job.data.ventaId,
  });
});

export { expiracionColaVenta };

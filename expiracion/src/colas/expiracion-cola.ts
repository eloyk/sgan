import Queue from 'bull';
import { ExpiracionCompraCompletaPublicador } from '../eventos/publicadores/publicador-expiracion-compra-completa';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  compraId: string;
}

const expiracionCola = new Queue<Payload>('expiracion:compra', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expiracionCola.process(async (job) => {
  new ExpiracionCompraCompletaPublicador(natsWrapper.client).publish({
    compraId: job.data.compraId,
  });
});

export { expiracionCola };

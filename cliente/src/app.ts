import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearClienteRouter } from './routes/crear-cliente';
import { actualizarClienteRouter } from './routes/actualizar-cliente';
import { indexClienteRouter } from './routes/index';
import { verClienteRouter } from './routes/ver-cliente';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
    //secure: false,
  })
);

app.use(usuarioActual);

app.use(crearClienteRouter);
app.use(actualizarClienteRouter);
app.use(indexClienteRouter);
app.use(verClienteRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

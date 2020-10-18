import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearStockRouter } from './routes/crear-stock';
import { actualizarStockRouter } from './routes/actualizar-stock';
import { indexStockRouter } from './routes/index';
import { verStockRouter } from './routes/ver-stock';

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

app.use(crearStockRouter);
app.use(actualizarStockRouter);
app.use(indexStockRouter);
app.use(verStockRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

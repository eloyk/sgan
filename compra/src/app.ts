import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearPreCompraRouter } from './routes/crear-pre-compra';
import { crearCompraRouter } from './routes/crear-compra';
import { indexCompraRouter } from './routes/index';
import { verCompraRouter } from './routes/ver-productos-empresa';

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

app.use(crearPreCompraRouter);
app.use(crearCompraRouter);
app.use(indexCompraRouter);
app.use(verCompraRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { actualizarAlmacenRouter } from './routes/actualizar-almacen';
import { indexAlmacenRouter } from './routes/index';
import { verAlmacenRouter } from './routes/ver-almacen';

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

app.use(actualizarAlmacenRouter);
app.use(indexAlmacenRouter);
app.use(verAlmacenRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

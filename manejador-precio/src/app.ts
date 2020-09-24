import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearManejadorPrecioRouter } from './routes/crear-manejador-precio';
import { indexManejadorPrecioRouter } from './routes/index';
import { verManejadorPrecioRouter } from './routes/ver-productos-empresa';
import { actualizarManejadorPrecioRouter } from './routes/actualizar-manejador-precio';

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

app.use(crearManejadorPrecioRouter);
app.use(actualizarManejadorPrecioRouter);
app.use(indexManejadorPrecioRouter);
app.use(verManejadorPrecioRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

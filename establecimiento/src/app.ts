import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearEstablecimientoRouter } from './routes/crear-establecimiento';
import { actualizarEstablecimientoRouter } from './routes/actualizar-establecimiento';
import { indexEstablecimientoRouter } from './routes/index';
import { verEstablecimientoRouter } from './routes/ver-establecimiento';

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

app.use(crearEstablecimientoRouter);
app.use(actualizarEstablecimientoRouter);
app.use(verEstablecimientoRouter);
app.use(indexEstablecimientoRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

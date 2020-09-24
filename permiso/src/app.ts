import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearPermisoRouter } from './routes/crear-permiso';
import { actualizarPermisoRouter } from './routes/actualizar-permiso';
import { indexPermisoRouter } from './routes/index';
import { verPermisoRouter } from './routes/ver-permiso';

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

app.use(crearPermisoRouter);
app.use(actualizarPermisoRouter);
app.use(indexPermisoRouter);
app.use(verPermisoRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

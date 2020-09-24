import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearProveedorRouter } from './routes/crear-proveedor';
import { actualizarProveedorRouter } from './routes/actualizar-proveedor';
import { indexProveedorRouter } from './routes/index';
import { verProveedorRouter } from './routes/ver-proveedor';

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

app.use(crearProveedorRouter);
app.use(actualizarProveedorRouter);
app.use(verProveedorRouter);
app.use(indexProveedorRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

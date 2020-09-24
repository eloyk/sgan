import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearUnidadMedidaRouter } from './routes/crear-unidad-medida';
import { actualizarUnidadMedidaRouter } from './routes/actualizar-unidad-medida';
import { indexUnidadMedidaRouter } from './routes/index';
import { verUnidadMedidaRouter } from './routes/ver-productos-empresa';

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

app.use(crearUnidadMedidaRouter);
app.use(actualizarUnidadMedidaRouter);
app.use(indexUnidadMedidaRouter);
app.use(verUnidadMedidaRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

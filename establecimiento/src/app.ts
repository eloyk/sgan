import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearCategoriaRouter } from './routes/crear-caregoria';
import { actualizarCategoriaRouter } from './routes/actualizar-categoria';
import { indexCategoriaRouter } from './routes/index';
import { verCategoriaRouter } from './routes/ver-categoria';

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

app.use(crearCategoriaRouter);
app.use(actualizarCategoriaRouter);
app.use(verCategoriaRouter);
app.use(indexCategoriaRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearEmpresaRouter } from './routes/crear-nueva';
import { actualizarEmpresaRouter } from './routes/actualizar-empresa';
import { verEmpresaRouter } from './routes/ver-empresa';
import { indexEmpresaRouter } from './routes/index';

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

app.use(crearEmpresaRouter);
app.use(actualizarEmpresaRouter);
app.use(verEmpresaRouter);
app.use(indexEmpresaRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

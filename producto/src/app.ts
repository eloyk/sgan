import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearProductoRouter } from './routes/crear-nuevo-producto';
import { crearProductoUnidadMedidaRouter } from './routes/crear-producto-unidad-medida';
import { indexProdutoRouter } from './routes/index';
import { verProductoRouter } from './routes/ver-productos-empresa';
import { actualizarProductoRouter } from './routes/actualizar-producto';

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

app.use(crearProductoRouter);
app.use(crearProductoUnidadMedidaRouter);
app.use(actualizarProductoRouter);
app.use(indexProdutoRouter);
app.use(verProductoRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

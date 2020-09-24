import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  ErrorNoEncontrado,
  controladorError,
  usuarioActual,
} from '@eloyk/comun';

import { crearPreVentaRouter } from './routes/crear-pre-venta';
import { crearClienteRouter } from './routes/crear-venta';
// import { indexProdutoRouter } from './routes/index';
// import { verProductoRouter } from './routes/ver-productos-empresa';

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

app.use(crearPreVentaRouter);
app.use(crearClienteRouter);
// app.use(actualizarProductoRouter);
// app.use(indexProdutoRouter);
// app.use(verProductoRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

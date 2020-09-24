import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { ErrorNoEncontrado, controladorError } from '@eloyk/comun';
import { usuarioActualRouter } from './routes/usuario-actual';
import { iniciarSesionRouter } from './routes/iniciar-sesion';
import { cerrarsesionRouter } from './routes/cerrar-sesion';
import { registrarUsuarioRouter } from './routes/registrar-usuario';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    secure: false,
  })
);

app.use(usuarioActualRouter);
app.use(iniciarSesionRouter);
app.use(cerrarsesionRouter);
app.use(registrarUsuarioRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };

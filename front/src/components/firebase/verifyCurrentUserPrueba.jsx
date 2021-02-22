import buildClient from "./build-client";

async function verifyCurrentUserPrueba(ctx, email, password) {

  const client = buildClient(ctx);
  const { data } = await client
    .post('/api/usuario/iniciarsesion',{
      email,
      password,
    });
  return data && data.usuarioActual
}

export default verifyCurrentUserPrueba
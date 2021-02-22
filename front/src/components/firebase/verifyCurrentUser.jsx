import buildClient from "./build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const { data } = await client.get('/api/usuario/usuarioactual');
  return data && data.usuarioActual
}

export default verifyCurrentUser
import buildClient from "./build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const { data } = await client.get('/api/usuario/usuarioactual');
  console.log('Este es el resultado de data: ' + data)
  if (data) {
    return data
  } else {
    return false
  }

  //return data && data.usuarioActual
}

export default verifyCurrentUser
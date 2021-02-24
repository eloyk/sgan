import buildClient from "../api/build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const resp = await client
    .get('/api/usuario/usuarioactual');
    const data = JSON.parse(resp.data.usuarioActual)
    if (data != "null") {
      return data
    } else {
      return false
    }
}

export default verifyCurrentUser
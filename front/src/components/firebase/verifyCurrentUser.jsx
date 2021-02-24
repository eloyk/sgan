import buildClient from "../api/build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const resp = await client
    .get('/api/usuario/usuarioactual');
    const data = JSON.stringify(resp.data.usuarioActual)
    const result = resp.data.usuarioActual
    console.log("DATA: " + data + "," + result)
    if (result != null) {
      return result
    } else {
      return false
    }
}

export default verifyCurrentUser
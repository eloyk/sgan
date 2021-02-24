import buildClient from "../api/build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const resp = await client
    .get('/api/usuario/usuarioactual');
    const data = JSON.stringify(resp.data.usuarioActual)
    const result = JSON.parse(data)
    console.log("DATA: " + data + "," + result)
    if (data != "null") {
      return data
    } else {
      return false
    }
}

export default verifyCurrentUser
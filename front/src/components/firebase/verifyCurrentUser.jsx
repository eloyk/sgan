import buildClient from "./build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  return await client.get('/api/usuario/usuarioactual')
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return false
    }
  })
  //return data && data.usuarioActual
}

export default verifyCurrentUser
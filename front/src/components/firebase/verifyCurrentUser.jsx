import buildClient from "../api/build-client";

async function verifyCurrentUser(ctx) {

  const client = buildClient(ctx);
  const resp = await client
    .get('/api/usuario/usuarioactual');
    const data = JSON.stringify(resp.data.usuarioActual)
    console.log('Este es el resultado de current user: ' + data)
    if (data == null) {
      return false
    } else {
      return data
    }

  // const client = buildClient(ctx);
  // const { data } = await client.get('/api/usuario/usuarioactual');
  // console.log('Este es el resultado de data: ' + data)
  // if (data) {
  //   return data
  // } else {
  //   return false
  // }

  //return data && data.usuarioActual
}

export default verifyCurrentUser
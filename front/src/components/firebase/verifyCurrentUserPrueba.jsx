import buildClient from "./build-client";

async function verifyCurrentUserPrueba(ctx, email, password) {
  const client = buildClient(ctx);
  return await client.post('/api/usuario/iniciarsesion',{
    email,
    password,
  })
  .then(res => {
    if (res) {
      return res.json()
    } else {
      return false
    }
  })
  // const client = buildClient(ctx);
  // const { data } = await client
  //   .post('/api/usuario/iniciarsesion',{
  //     email,
  //     password,
  //   });
  // return data && data.usuarioActual
}

export default verifyCurrentUserPrueba
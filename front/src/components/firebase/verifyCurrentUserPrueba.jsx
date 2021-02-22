import buildClient from "./build-client";

async function verifyCurrentUserPrueba(ctx, email, password) {

  const client = buildClient(ctx);
  const { data } = await client
    .post('/api/usuario/iniciarsesion',{
      email,
      password,
    });
    console.log('Este es el resultado de data: ' + data)
    if (data) {
      return data
    } else {
      return false
    }

  //return data && data.usuarioActual
}

export default verifyCurrentUserPrueba
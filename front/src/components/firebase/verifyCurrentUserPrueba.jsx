import buildClient from "../api/build-client";

async function verifyCurrentUserPrueba(ctx) {
  const client = buildClient(ctx);
  const resp = await client
    .post('/api/usuario/iniciarsesion',{
      email: "test5@gmail.com",
      password: "123456" 
    });
    const data = JSON.stringify(resp.data)
    console.log('Este es el resultado de data: ' + data)
    if (data != "null") {
      return data
    } else {
      return false
    }

  //return data && data.usuarioActual
}

export default verifyCurrentUserPrueba
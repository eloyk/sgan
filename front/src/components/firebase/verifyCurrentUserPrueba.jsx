import buildClient from "./build-client";

async function verifyCurrentUserPrueba(ctx, email, password) {
  const { origin } = absoluteUrl(ctx.req)

  // Try to verify firebase token via API
  return await fetch(origin + "/api/usuario/iniciarsesion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email,password })
  }).then(res => {
    if (res.ok) {
      console.log('Este es el resultado del login: ' + res.json())
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
  //   console.log('Este es el resultado de data: ' + data)
  //   if (data) {
  //     return data.json()
  //   } else {
  //     return false
  //   }

  //return data && data.usuarioActual
}

export default verifyCurrentUserPrueba
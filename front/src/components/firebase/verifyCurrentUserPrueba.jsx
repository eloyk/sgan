//import buildClient from "./build-client";
import fetch from "isomorphic-unfetch"
import absoluteUrl from "next-absolute-url"

async function verifyCurrentUserPrueba(ctx) {
  const { origin } = absoluteUrl(ctx.req)

  // Try to verify firebase token via API
  return await fetch(origin + "/api/usuario/iniciarsesion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 	
      email: "test5@gmail.com",
      password: "123456" 
    })
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
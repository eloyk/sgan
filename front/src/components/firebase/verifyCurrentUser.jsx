//import buildClient from "./build-client";
import fetch from "isomorphic-unfetch"

async function verifyCurrentUser(ctx) {
  const { origin } = absoluteUrl(ctx.req)

  // Try to verify firebase token via API
  return await fetch(origin + "/api/usuario/usuarioactual", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      console.log('Este es el resultado del Current User: ' + res.json())
      return res.json()
    } else {
      return false
    }
  })

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
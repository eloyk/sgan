//import buildClient from "./build-client";
import fetch from "isomorphic-unfetch"
import absoluteUrl from "next-absolute-url"

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
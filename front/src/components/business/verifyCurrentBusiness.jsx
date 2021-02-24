import buildClient from "../api/build-client";

async function verifyCurrentBusiness(ctx) {

  const client = buildClient(ctx);
  const resp = await client
    .get('/api/empresa');
    const data = resp.data
    console.log("DATA: " + data)
    if (data) {
      return data
    } else {
      return false
    }
}

export default verifyCurrentBusiness
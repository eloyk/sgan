import buildClient from "../api/build-client";

async function verifyCurrentBusiness(ctx, id) {

  const client = buildClient(ctx);
  const resp = await client
    .get(`/api/empresa/${id}`);
    const data = resp.data
    console.log("DATA de verifyCurrentBusiness: " + JSON.stringify(data))
    if (data) {
      return data
    } else {
      return false
    }
}

export default verifyCurrentBusiness
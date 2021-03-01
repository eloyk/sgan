import buildClient from "../api/build-client";

async function verifyCurrentBusiness(ctx, id) {
  try {
    const client = buildClient(ctx);
    const resp = await client
      .get(`/api/empresa/${id}`);
      const data = resp.data
      console.log("DATA de verifyCurrentBusiness: " + JSON.stringify(data))
      return data
  } catch(e) {
    throw e
  }
}

export default verifyCurrentBusiness
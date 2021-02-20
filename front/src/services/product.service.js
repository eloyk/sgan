import axios from "axios";

const API_URL = "https://www.sgerd.com/api/";

const getProduct = () => {
  return axios.get(API_URL + "producto");
};

export default {
  getProduct
};
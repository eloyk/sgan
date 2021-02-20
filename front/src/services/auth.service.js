import axios from "axios";
import cors from "cors"

const API_URL = "https://www.sgerd.com/api/usuario/";

const register = async (email, password) => {
  const response = await axios.post(API_URL + "registrousuario", {
    email,
    password,
  });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios
    .post(API_URL + "iniciarsesion", {
      email,
      password,
    });
  return response.data;
};

const currenUser = async () => {
  const response = await axios
    .get(API_URL + "usuarioactual");
  return response.data;
};

const logout = () => {
  return axios.post(API_URL + "cerrarsesion");
};

export default {
  register,
  login,
  currenUser,
  logout,
};
import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // Peticion al servidor
    console.log('ejecutando del lado del servidor');

    return axios.create({
      baseURL:
        '/',
      headers: req.headers,
    });
  } else {
    // Peticion al navegador
    console.log('ejecutando del lado del cliente');

    return axios.create({
      baseUrl: '/',
    });
  }
};

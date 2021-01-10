import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // Peticion al servidor
    return axios.create({
      baseURL:
        'http://localhost:3000',
      headers: req.headers,
    });
  } else {
    // Peticion al navegador
    return axios.create({
      baseUrl: '/',
    });
  }
};

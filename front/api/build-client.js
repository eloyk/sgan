import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // Peticion al servidor
    console.log('ejecutando del lado del servidor');

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
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

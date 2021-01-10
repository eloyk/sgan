import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // Peticion al servidor
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // Peticion al navegador
    return axios.create({
      baseUrl: '/',
    });
  }
};

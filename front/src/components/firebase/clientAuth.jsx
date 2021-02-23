import Router from 'next/router';
import PAGE from "config/page.config"

const login = async (email, password) => {
const { doRequest, errores } = await useRequest({
  url: '/api/usuario/iniciarsesion',
  method: 'post',
  body: {
    email,
    password,
  },
  onSuccess: () => Router.push(Router.query.redirect || PAGE.dashboardPagePath),
});

return { doRequest, errores };
}

const register = async (email, password) => {
  const { doRequest, errores } = await useRequest({
    url: '/api/usuario/registrousuario',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push(Router.query.redirect || PAGE.dashboardPagePath),
  });
  
  return { doRequest, errores };
  }

  const logout = async () => {
    const { doRequest, errores } = await useRequest({
      url: '/api/usuario/cerrarsesion',
      method: 'post',
      body: {},
      onSuccess: () => Router.push(Router.query.redirect || PAGE.dashboardPagePath),
    });
    
    return { doRequest, errores };
    }

export default {
  register,
  login,
  logout,
};
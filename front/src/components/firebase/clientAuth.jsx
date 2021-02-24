import doRequest from "../api/do-request"
import PAGE from "config/page.config"
import Router from "next/router"

const login = async ({email, password, onSuccess}) => {

  await doRequest({
    url: '/api/usuario/iniciarsesion',
    method: 'post',
    body: {
      email,
      password,
    },
  })
  .then(() => {
    if (onSuccess) {
      onSuccess();
    } else {
      () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
    }
  })
  .catch(err => {
    throw err
  })

}

const register = async ({email, password, onSuccess}) => {

  await doRequest({
    url: '/api/usuario/registrousuario',
    method: 'post',
    body: {
      email,
      password,
    },
  })
  .then(() => {
    if (onSuccess) {
      onSuccess();
    } else {
      () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
    }
  })
  .catch(err => {
    throw err
  })

}

const logout = async ({onSuccess}) => {

  await doRequest({
    url: '/api/usuario/cerrarsesion',
    method: 'post',
    body: {},
  })
  .then(() => {
    if (onSuccess) {
      onSuccess();
    } else {
      () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
    }
  })
  .catch(err => {
    throw err
  })

}

export default {
  register,
  login,
  logout,
};
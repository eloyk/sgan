import doRequest from "../api/do-request"
import PAGE from "config/page.config"
import Router from "next/router"

const createBusiness = async ({props,
  nombreEmpresa, 
  clasifEmpresa, 
  tipoEmpresa, 
  fundador, 
  telefono, 
  emailEmpresa, 
  RNC, 
  usuarioIdAlta, 
  emailUsuarioAlta, 
  onSuccess}) => {

  await doRequest({
    url: '/api/empresa',
    method: 'post',
    body: {
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta,
      emailUsuarioAlta,
    },
  })
  .then(data => {

    if (onSuccess) {
      onSuccess();
    } else {
      () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
    }
    props.currentBusinessChange(data)
    return data;
  })
  .catch(err => {
    throw err
  })

}

const getBusiness = async (props) => {

  await doRequest({
    url: `/api/empresa/${props.user.empresaId}`,
    method: 'get',
    body: {},
  })
  .then(data => {
    props.currentBusinessChange(data)
  })
  .catch(err => {
    throw err
  })

}

export default {
  createBusiness,
  getBusiness,
};
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
    const convetData = JSON.stringify(data)
    console.log('Data proveniente del clientBusiness: ' + convetData)
    props.currentBusinessChange(data)
    return data;
  })
  .catch(err => {
    throw err
  })

}

const getBusiness = async (id) => {

  await doRequest({
    url: '/api/empresa/' + id,
    method: 'get',
    body: {},
  })
  .then(data => data)
  .catch(err => {
    throw err
  })

}

export default {
  createBusiness,
  getBusiness,
};
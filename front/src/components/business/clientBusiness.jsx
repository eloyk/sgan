import doRequest from "../api/do-request"
import PAGE from "config/page.config"
import Router from "next/router"

const createBusiness = async ({
  props,
  nombreEmpresa, 
  clasifEmpresa, 
  tipoEmpresa, 
  fundador, 
  telefono, 
  emailEmpresa, 
  RNC, 
  usuarioIdAlta, 
  emailUsuarioAlta, 
  }) => {

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
    props.currentBusinessChange(data)
    return data;
  })
  .catch(err => {
    throw err
  })
}

const updateBusiness = async ({
  props,
  id,
  nombreEmpresa, 
  clasifEmpresa, 
  tipoEmpresa, 
  fundador, 
  telefono, 
  emailEmpresa, 
  RNC, 
  usuarioIdAlta, 
  emailUsuarioAlta, 
  }) => {

  await doRequest({
    url: `/api/empresa/${id}`,
    method: 'put',
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
    props.currentBusinessChange(data)
    return data;
  })
  .catch(err => {
    throw err
  })
}

const getBusiness = async (empresaId) => {

  await doRequest({
    url: `/api/empresa/${empresaId}`,
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
  updateBusiness,
  getBusiness,
};
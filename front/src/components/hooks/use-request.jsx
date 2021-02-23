import Router from 'next/router';
import axios from 'axios';
//import { useState } from 'react';

const doRequest = async ({ url, method, body }, props = {}) => {
    try {
      const response = await axios[method](url, { ...body, ...props });

      // if (onSuccess) {
      //   onSuccess();
      // } else {
      //   () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
      // }
      const data = JSON.stringify(response.data)
      console.log('Respuesta desde el try: ' + data);
      return data;
    } catch (err) {
      const errores = JSON.stringify(err.response.data.errores.map((err) => err.mensaje))
      console.log('Respuesta desde el catch: ' + err.response.data.errores);
      throw errores;
    }
  };

export default  doRequest;

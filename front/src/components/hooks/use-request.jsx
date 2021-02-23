import Router from 'next/router';
import axios from 'axios';
//import { useState } from 'react';

export default ({ url, method, body }) => {

  const doRequest = async (props = {}) => {
    try {
      const response = await axios[method](url, { ...body, ...props });

      // if (onSuccess) {
      //   onSuccess();
      // } else {
      //   () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
      // }
      //const data = JSON.stringify(response.data)
      return response.data;
    } catch (err) {
      //const errores = JSON.stringify(err.response.data.errores)
      return err.response.data.errores;
    }
  };

  return doRequest;
};

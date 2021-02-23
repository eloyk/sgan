import Router from 'next/router';
import axios from 'axios';
//import { useState } from 'react';
import PAGE from "config/page.config"

export default ({ url, method, body }) => {
  //const [errores, setErrores] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrores(null);
      const response = await axios[method](url, { ...body, ...props });

      // if (onSuccess) {
      //   onSuccess();
      // } else {
      //   () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
      // }

      return response.data;
    } catch (err) {
      //const errores = JSON.stringify(err.response.data.errores)
      return err.response.data.errores;
      //setErrores(err.response.data.errores);
    }
  };

  return doRequest;
};

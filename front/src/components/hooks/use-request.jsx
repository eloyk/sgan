import Router from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import PAGE from "config/page.config"

export default ({ url, method, body, onSuccess }) => {
  const [errores, setErrores] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrores(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess();
      } else {
        () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
      }
      const data = JSON.stringify(response.data)
      return data;
    } catch (err) {
      const errores = JSON.stringify(err.response.data.errores)
      console.log(errores);
      setErrores(errores);
    }
  };

  return { doRequest, errores };
};

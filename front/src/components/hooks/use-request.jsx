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
        onSuccess(response.data);
      } else {
        () => Router.push(Router.query.redirect || PAGE.dashboardPagePath);
      }
      const data = JSON.stringify(response.data)
      console.log('Este es el resultado de current user: ' + data)
  
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      setErrores( err.response.data.errores );
    }
  };

  return { doRequest, errores };
};

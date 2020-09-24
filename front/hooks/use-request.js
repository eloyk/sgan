import Router from 'next/router';
import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errores, setErrores] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrores(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      } else {
        () => Router.push('/');
      }

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      setErrores(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errores.map((err) => (
              <li key={err.mensaje}>{err.mensaje}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errores };
};

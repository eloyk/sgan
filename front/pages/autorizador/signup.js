import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/usuario/registrousuario',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit} class="form-signin">
      <h1>Registrarse</h1>
      <div className="form-group">
        <label class="sr-only">Correo Electrónico</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="email"
          id="inputEmail"
          placeholder="Correo Electrónico"
        />
      </div>
      <div className="form-group">
        <label class="sr-only">Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Contraseña"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Registro</button>
    </form>
  );
};

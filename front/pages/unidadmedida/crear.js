import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NuevaUnidadMedida = ({ usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const [descripcion, setDescripcion] = useState('');
  const [literal, setLiteral] = useState('');
  const empresaId = usuarioActual.empresaId;
  const { doRequest, errores } = useRequest({
    url: '/api/unidadmedida',
    method: 'post',
    body: {
      descripcion,
      literal,
      empresaId,
    },
    onSuccess: () => Router.push('/unidadmedida'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <div>
      <h1>Crear unidad de medida</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Unidad de medida</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Literal</label>
          <input
            value={literal}
            onChange={(e) => setLiteral(e.target.value)}
            className="form-control"
          />
        </div>
        {errores}
        <button className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

NuevaUnidadMedida.getInitialProps = async (context, client, usuarioActual) => {
  return { usuarioActual };
};

export default NuevaUnidadMedida;

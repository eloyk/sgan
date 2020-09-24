import Link from 'next/link';
import Router from 'next/router';

const IndexUnidadMedida = ({ usuarioActual, unidadesMedida }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const listaUnidadMedida = unidadesMedida.map((unidadMedida) => {
    return (
      <tr key={unidadMedida.id}>
        <td>{unidadMedida.descripcion}</td>
        <td>{unidadMedida.literal}</td>
      </tr>
    );
  });

  return listaUnidadMedida ? (
    <div>
      <h2>Unidades de medida</h2>
      <button
        onClick={() => Router.push('/unidadmedida/crear')}
        className="btn btn-primary"
      >
        crear
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Unidad de medida</th>
            <th>Literal</th>
          </tr>
        </thead>
        <tbody>{listaUnidadMedida}</tbody>
      </table>
    </div>
  ) : (
    <h4>No hay unidades de medida para mostrar</h4>
  );
};

IndexUnidadMedida.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { data } = await client.get('/api/unidadmedida');

  return { unidadesMedida: data };
};

export default IndexUnidadMedida;

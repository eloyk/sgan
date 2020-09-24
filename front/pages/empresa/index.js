import Link from 'next/link';
import Router from 'next/router';

const IndexEmpresa = ({ usuarioActual, empresas }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const listaEmpresa = empresas.map((empresa) => {
    return (
      <tr key={empresa.id}>
        <td>{empresa.nombreEmpresa}</td>
        <td>{empresa.clasifEmpresa}</td>
        <td>{empresa.tipoEmpresa}</td>
        <td>{empresa.fundador}</td>
        <td>{empresa.telefono}</td>
        <td>{empresa.emailEmpresa}</td>
        <td>{empresa.RNC}</td>
        <td>{empresa.emailUsuarioAlta}</td>
        <td>
          <Link href="/empresa/[empresaId]" as={`/empresa/${empresa.id}`}>
            <a>ver</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Empresas</h2>
      <button
        onClick={() => Router.push('/empresa/crear')}
        className="btn btn-primary"
      >
        crear
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre de la empresa</th>
            <th>Clasificacion</th>
            <th>Tipo de empresa</th>
            <th>Fundador</th>
            <th>Telefono</th>
            <th>Email de la empresa</th>
            <th>RNC</th>
            <th>Usuario que dio de alta la empresa</th>
          </tr>
        </thead>
        <tbody>{listaEmpresa}</tbody>
      </table>
    </div>
  );
};

IndexEmpresa.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { data } = await client.get('/api/empresa');

  return { empresas: data };
};

export default IndexEmpresa;

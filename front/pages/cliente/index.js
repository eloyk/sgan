import Link from 'next/link';
import Router from 'next/router';

const IndexCliente = ({ clientes, usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }

  const listacliente = clientes.map((cliente) => {
    return (
      <tr key={cliente.id}>
        <td>{cliente.nombreEmpresa}</td>
        <td>{cliente.nombres}</td>
        <td>{cliente.apellidos}</td>
        <td>{cliente.telefono}</td>
        <td>{cliente.direccion}</td>
        <td>{cliente.correoElectronico}</td>
        <td>{cliente.tipoDocumento}</td>
        <td>{cliente.numeroDocumento}</td>
        <td>
          <Link href="/cliente/[clienteId]" as={`/cliente/${cliente.id}`}>
            <a>ver</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Clientes</h2>
      <button
        onClick={() => Router.push('/cliente/crear')}
        className="btn btn-primary"
      >
        crear
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre de la empresa</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Correo electronico</th>
            <th>Tipo documento</th>
            <th>Numero documento</th>
          </tr>
        </thead>
        <tbody>{listacliente}</tbody>
      </table>
    </div>
  );
};

IndexCliente.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { data } = await client.get('/api/empresa/cliente');

  return { clientes: data, usuarioActual };
};

export default IndexCliente;

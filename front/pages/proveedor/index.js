import Link from 'next/link';
import Router from 'next/router';

const IndexProveedor = ({ usuarioActual, proveedores }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const listaproveedor = proveedores.map((proveedor) => {
    return (
      <tr key={proveedor.id}>
        <td>{proveedor.nombreEmpresa}</td>
        <td>{proveedor.nombres}</td>
        <td>{proveedor.apellidos}</td>
        <td>{proveedor.telefono}</td>
        <td>{proveedor.direccion}</td>
        <td>{proveedor.correoElectronico}</td>
        <td>{proveedor.tipoDocumento}</td>
        <td>{proveedor.numeroDocumento}</td>
        <td>
          <Link
            href="/proveedor/[proveedorId]"
            as={`/proveedor/${proveedor.id}`}
          >
            <a>ver</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Proveedores</h2>
      <button
        onClick={() => Router.push('/proveedor/crear')}
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
        <tbody>{listaproveedor}</tbody>
      </table>
    </div>
  );
};

IndexProveedor.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { data } = await client.get('/api/empresa/proveedor');

  return { proveedores: data };
};

export default IndexProveedor;

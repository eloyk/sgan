const VerProveedor = ({ proveedor, usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  return (
    <div>
      <h1>{proveedor.nombreEmpresa}</h1>
      <h4>{proveedor.nombres}</h4>
      <h4>{proveedor.apellidos}</h4>
    </div>
  );
};

VerProveedor.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { proveedorId } = context.query;
  const { data } = await client.get(`/api/empresa/proveedor/${proveedorId}`);

  return { proveedor: data, usuarioActual };
};

export default VerProveedor;

import Router from 'next/router';

const VerCliente = ({ cliente, usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  return (
    <div>
      <h1>{cliente.nombreEmpresa}</h1>
      <h4>{cliente.nombres}</h4>
      <h4>{cliente.apellidos}</h4>
    </div>
  );
};

VerCliente.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { clienteId } = context.query;
  const { data } = await client.get(`/api/empresa/cliente/${clienteId}`);

  return { cliente: data, usuarioActual };
};

export default VerCliente;

const VerEmpresa = ({ empresa, usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  return (
    <div>
      <h1>{empresa.nombreEmpresa}</h1>
      <h4>{empresa.clasifEmpresa}</h4>
    </div>
  );
};

VerEmpresa.getInitialProps = async (context, client, usuarioActual) => {
  if (usuarioActual === null) {
    return;
  }
  const { empresaId } = context.query;
  const { data } = await client.get(`/api/empresa/${empresaId}`);

  return { empresa: data, usuarioActual };
};

export default VerEmpresa;

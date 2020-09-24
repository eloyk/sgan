import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NuevoProveedor = ({ usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const usuarioIdAlta = usuarioActual.id;
  const emailUsuarioAlta = usuarioActual.email;
  const empresaId = usuarioActual.empresaId;
  const { doRequest, errores } = useRequest({
    url: '/api/empresa/proveedor',
    method: 'post',
    body: {
      nombreEmpresa,
      nombres,
      apellidos,
      telefono,
      direccion,
      empresaId,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      usuarioIdAlta,
      emailUsuarioAlta,
    },
    onSuccess: () => Router.push('/proveedor'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <div>
      <h1>Crear proveedor</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>nombre de la empresa</label>
          <input
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Nombres</label>
          <input
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Telefono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Direccion</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Correo electronico</label>
          <input
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tipo documento</label>
          <input
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Numero documento</label>
          <input
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            className="form-control"
          />
        </div>
        {errores}
        <button className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};
NuevoProveedor.getInitialProps = async (context, client, usuarioActual) => {
  return usuarioActual;
};

export default NuevoProveedor;

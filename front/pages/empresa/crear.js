import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NuevaEmpresa = ({ usuarioActual }) => {
  if (usuarioActual === null) {
    return () => Router.push('/');
  }
  const [animal, updateAnimal] = useState('');
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [clasifEmpresa, setClasifEmpresa] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [fundador, setFundador] = useState('');
  const [telefono, setTelefono] = useState('');
  const [emailEmpresa, setEmailEmpresa] = useState('');
  const [RNC, setRNC] = useState('');
  let usuarioIdAlta;
  let emailUsuarioAlta;
  let CLASIFICACION_EMPRESA = [
    'Empresas industriales',
    'Industrias básicas',
    'Industrias de extracción',
    'Industrias de bienes de capital',
    'Industrias intermedias',
    'Industria de bienes semiduraderos',
    'Industria de bienes no duraderos',
    'Las industrias de punta',
    'Empresas comerciales',
  ];
  let TIPO_EMPRESA = ['Productos'];
  const { doRequest, errores } = useRequest({
    url: '/api/empresa',
    method: 'post',
    body: {
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta,
      emailUsuarioAlta,
    },
    onSuccess: () => Router.push('/empresa'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    (usuarioIdAlta = usuarioActual.id),
      (emailUsuarioAlta = usuarioActual.email);

    doRequest();
  };

  return (
    <div>
      <h1>Crear empresa</h1>
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
          <label>Clasificacion de la empresa</label>
          <select
            value={clasifEmpresa}
            onChange={(e) => setClasifEmpresa(e.target.value)}
            onBlur={(e) => setClasifEmpresa(e.target.value)}
            className="custom-select"
            id="validationCustom04"
            required
          >
            <option selected disabled value="">
              Selecione la Clasificacion de su empresa
            </option>
            {CLASIFICACION_EMPRESA.map((clEmpresa) => (
              <option key={clEmpresa} value={clEmpresa}>
                {clEmpresa}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de empresa</label>
          <select
            value={tipoEmpresa}
            onChange={(e) => setTipoEmpresa(e.target.value)}
            onBlur={(e) => setTipoEmpresa(e.target.value)}
            className="custom-select"
            id="validationCustom04"
            required
          >
            <option selected disabled value="">
              Selecione el tipo de empresa
            </option>
            {TIPO_EMPRESA.map((tipEmpresa) => (
              <option key={tipEmpresa} value={tipEmpresa}>
                {tipEmpresa}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Fundador</label>
          <input
            value={fundador}
            onChange={(e) => setFundador(e.target.value)}
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
          <label>Email de la empresa</label>
          <input
            value={emailEmpresa}
            onChange={(e) => setEmailEmpresa(e.target.value)}
            className="form-control"
            type="email"
            id="inputEmail"
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="form-group">
          <label>RNC</label>
          <input
            value={RNC}
            onChange={(e) => setRNC(e.target.value)}
            className="form-control"
          />
        </div>
        {errores}
        <button className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};
NuevaEmpresa.getInitialProps = async (context, client, usuarioActual) => {
  return usuarioActual;
};

export default NuevaEmpresa;

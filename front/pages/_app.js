import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
const AppComponent = ({ Component, pageProps, usuarioActual }) => {
  return (
<div class="container">
      <div class="row justify-content-md-center">
      <div class="col-sm">
        <Header usuarioActual={usuarioActual} class="col-sm"/>
        </div>
      </div>
      <div class="row justify-content-md-center">
      <div class="col-sm">
          <Component usuarioActual={usuarioActual} {...pageProps} />
          </div>
      </div>
  </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  //const { data } = await client.get('/api/usuario/usuarioactual');
  console.log(client);
  const data = {usuarioActual:{
    id: '',
    email: ''
  }};

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.usuarioActual
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

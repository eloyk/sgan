import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
const AppComponent = ({ Component, pageProps, usuarioActual }) => {
  return (
    <div>
      <Header usuarioActual={usuarioActual} />
      <div className="container">
        <Component usuarioActual={usuarioActual} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/usuario/usuarioactual');

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

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
 Let client = null;
 Let { data } = null;
Try{
  client = buildClient(appContext.ctx);
  { data } = await client.get('/api/usuario/usuarioactual');
 }catch(e) {
  console.log(e);
 }

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

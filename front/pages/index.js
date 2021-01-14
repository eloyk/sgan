import Link from 'next/link';

const LandingPage = ({ usuarioActual }) => {
  return usuarioActual ? (
    <h1>tu estas logueado en la pagina</h1>
  ) : (
    <h1>tu no esta logueado en la pag</h1>
  );
};

LandingPage.getInitialProps = async (context, client, usuarioActual) => {
  return usuarioActual;
};

export default LandingPage;

import Link from 'next/link';

const LandingPage = ({ usuarioActual }) => {
  return usuarioActual ? (
    <h1>tu estas logueado</h1>
  ) : (
    <h1>tu no esta logueado</h1>
  );
};

LandingPage.getInitialProps = async (context, client, usuarioActual) => {
  return usuarioActual;
};

export default LandingPage;

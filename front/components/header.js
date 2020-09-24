import Link from 'next/link';

export default ({ usuarioActual }) => {
  const links = [
    !usuarioActual && { label: 'Registrarse', href: '/autorizador/signup' },
    !usuarioActual && { label: 'Iniciar sesion', href: '/autorizador/signin' },
    usuarioActual && { label: 'Empresa', href: '/empresa' },
    usuarioActual && { label: 'Cliente', href: '/cliente' },
    usuarioActual && { label: 'Proveedor', href: '/proveedor' },
    usuarioActual && { label: 'Unidad medida', href: '/unidadmedida' },
    usuarioActual && { label: 'Salir', href: '/autorizador/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return usuarioActual ? (
    <nav className="navbar navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">{usuarioActual.nombreEmpresa}</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Nombre de la empresa</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

import React from 'react';
import logo from '../assets/logo_municipalidad.png';

interface HeaderProps {
  seccionActual: string;
}

const Header: React.FC<HeaderProps> = ({ seccionActual }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand nav-title" href="/">
          <img src={logo} alt="Logo Tejelanas Vivi" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${seccionActual === 'home' ? 'active' : ''}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${seccionActual === 'about-us' ? 'active' : ''}`}
                href="about-us"
              >
                Quienes Somos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${seccionActual === 'products-services' ? 'active' : ''}`}
                href="products-services"
              >
                Productos y Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${seccionActual === 'faq' ? 'active' : ''}`}
                href="faq"
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${seccionActual === 'contact-us' ? 'active' : ''}`}
                href="contact-us"
              >
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

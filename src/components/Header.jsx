import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa o CSS da animação
import Logo from './Logo'; // Importa o novo componente de Logo

function Header() {
  return (
    // Adiciona a classe para a animação e mantém o padding
    <header className="header-animated p-3">
      <nav className="container d-flex justify-content-between align-items-center">
        {/* Substitui o texto "Logo" pelo componente <Logo /> */}
        <Link to="/" className="text-white text-decoration-none">
          <Logo />
        </Link>
        <div>
          <Link to="/" className="btn btn-outline-light">Ranking</Link>
          {/* Futuramente: <Link to="/aulas" className="btn btn-outline-light ms-2">Aulas</Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa o CSS da animação

function Header() {
  return (
    // Adiciona a classe para a animação e mantém o padding
    <header className="header-animated p-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="h4 text-white text-decoration-none">Logo</Link>
        <div>
          <Link to="/" className="btn btn-outline-light">Ranking</Link>
          {/* Futuramente: <Link to="/aulas" className="btn btn-outline-light ms-2">Aulas</Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;

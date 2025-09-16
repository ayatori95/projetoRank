import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <nav className="container d-flex justify-content-between">
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

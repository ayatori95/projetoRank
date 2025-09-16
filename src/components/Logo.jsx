import React from 'react';

function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="currentColor" // Usa a cor do texto do elemento pai
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo do site"
    >
      {/* Barra do 2º lugar */}
      <rect x="10" y="40" width="25" height="60" rx="5" />
      {/* Barra do 1º lugar */}
      <rect x="40" y="20" width="25" height="80" rx="5" />
      {/* Barra do 3º lugar */}
      <rect x="70" y="60" width="25" height="40" rx="5" />
    </svg>
  );
}

export default Logo;

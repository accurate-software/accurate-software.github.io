import React from 'react';

const Header = () => {
  return (
    <header>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a href="/">Home</a>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

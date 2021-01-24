import React from 'react';
import style from '../module/Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/jokes">Jokes</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

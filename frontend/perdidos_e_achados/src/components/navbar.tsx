import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar-app mt-3 d-flex justify-content-between align-items-center'>

      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="PerdidosEAchados"></img>
        </Link>
      </div>

      {/* <div className='login'>
        <a href='#'>Entrar</a> |  <a href='#'>Registrar</a> 
      </div> */}

    </nav> 
  );
}

export default Navbar;
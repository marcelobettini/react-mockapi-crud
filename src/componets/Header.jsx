import React from 'react';
import './Header.css';
import Navbar from './Navbar';

function Header({ title, children }) {
  return (
    <header className='header'>
      <div className='menu-title'>

        <Navbar />
        <h1>{title}</h1>
      </div>
      {children}
    </header>
  );
}

export default Header;
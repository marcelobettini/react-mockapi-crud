import React from 'react';
import './Header.css';
import Navbar from './Navbar';

function Header({ title }) {
  return (
    <header className='header'>
      <>
        <Navbar />
      </>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
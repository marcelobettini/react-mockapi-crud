import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to={"/"} className="navlink">Home</NavLink>
      <NavLink to={"/about"} className="navlink">About</NavLink>
    </nav>
  );
}

export default Navbar;
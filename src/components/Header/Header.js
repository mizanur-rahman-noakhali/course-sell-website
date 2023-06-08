import React from 'react';
import  logo from '../../images/logo-udemy.svg'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <nav>
        <a href="catagory">catagory</a>
        <a href="udemy business">udemy business</a>
        <a href="tech on udemy">tech on udemy</a>
        </nav>
    </div>
  );
};

export default Header;
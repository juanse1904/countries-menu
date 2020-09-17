import React from 'react';
import moon from '../assets/static/moon.svg';
import '../assets/styles/Header.scss';

const Header = () => (
  <div className='header'>
    <h2>Where in the world?</h2>
    <div className='switch'>
      <img src={moon} alt='' />
      <h3>Dark Mode</h3>
    </div>
  </div>

);

export default Header;

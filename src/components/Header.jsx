import React from 'react';
import { Link } from 'react-router-dom';
import moon from '../assets/static/moon.svg';
import '../assets/styles/Header.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <h2 className='logoTitle'>Where in the world?</h2>
    </Link>
    <div className='switch'>
      <img src={moon} alt='' />
      <h3>Dark Mode</h3>
    </div>
  </div>

);

export default Header;

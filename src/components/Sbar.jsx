import React from 'react';
import search from '../assets/static/search.png';
import '../assets/styles/Sbar.scss';

const Sbar = () => (
  <div className='infobar'>
    <div className='sbar'>
      <img src={search} alt='' />
      <input type='text' placeholder='Search for a Country...' />
    </div>
    <div className='options'>
      <select name='lista desplegable' placeholder='Filter By Region'>
        <option value=''>Africa</option>
        <option value=''>America</option>
        <option value=''>Asia</option>
        <option value=''>Europe</option>
        <option value=''>Oceania</option>
      </select>
    </div>
  </div>
);
export default Sbar;


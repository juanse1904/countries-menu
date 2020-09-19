import React from 'react';
import '../assets/styles/CountryItems.scss';

const Country = ({ name, population, region, capital, flag }) => (

  <div className='infoc'>
    <img src={flag} alt='' />
    <div className='data'>
      <h2>{name}</h2>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </div>
  </div>

);

export default Country;


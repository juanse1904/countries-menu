import React from 'react';
import '../assets/styles/CountryItems.scss';

const Country = ({ name, population, region, capital, flag }) => (

  <div className='infoc'>
    <img src={flag} alt='' />
    <div className='data'>
      <h2>{name}</h2>
      <p>
        Population:
        {population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
      </p>
      <p>
        Region:
        {region}
      </p>
      <p>
        Capital:
        {capital}
      </p>
    </div>
  </div>

);

export default Country;


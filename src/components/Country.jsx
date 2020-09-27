import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/CountryItems.scss';

const Country = ({ name, population, region, capital, flag, alpha2Code }) => (

  <div className='infoc' data-id={alpha2Code}>
    <img src={flag} alt='' id={alpha2Code} />
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


import React from 'react';
import '../assets/styles/Expand.scss';
import useInitialState from '../hooks/useInitialState';

const Country = ({ ...information }) => (
  <div className='infoe' id={alpha2Code}>
    <img src={flag} alt='' />
    <div className='data'>
      <h2>{name}</h2>
      <div className='col1'>

        <p>
          <p>
            Native Name:
            {nativeName}
          </p>
          Population:
          {population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </p>
        <p>
          Region:
          {region}
        </p>
        <p>
          Sub Region:
          {subregion}
        </p>
        <p>
          Capital:
          {capital}
        </p>
      </div>
      <div className='col2'>
        <p>
          Top Level Domain:
          {topLevelDomain[0]}
        </p>
        <p>
          Currencies:
          {currencies[0].code}
        </p>
        <p>
          Languages:
          {languajes[0].nativeName}
        </p>
      </div>
      <p>Border Countries</p>
      {borders.map((items) => <input type='button' value={Name(items)} />)}
    </div>

  </div>

);

export default Country;


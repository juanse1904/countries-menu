import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Expand.scss';

const Country = (props) => {
  const dispatch = useDispatch();
  const { alpha2Code } = props.match.params;
  const Name = (alpha1) => {
    const limit = useSelector((state) => state.countryList.find((item) => item.alpha3Code === alpha1));
    return (limit.name);
  };
  const Alpha2 = (alpha1) => {
    const limit = useSelector((state) => state.countryList.find((item) => item.alpha3Code === alpha1));
    return (limit.alpha2Code);
  };

  const country = useSelector((state) => state.countryList.find((item) => item.alpha2Code === alpha2Code));
  console.log('esta es la prop', alpha2Code, country);
  return (
    <div className='infoe'>
      <img src={country.flag} alt='' />
      <div className='data'>
        <h2>{country.name}</h2>
        <div className='col1'>

          <p>
            <p>
              Native Name:
              {country.nativeName}
            </p>
            Population:
            {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </p>
          <p>
            Region:
            {country.region}
          </p>
          <p>
            Sub Region:
            {country.subregion}
          </p>
          <p>
            Capital:
            {country.capital}
          </p>
        </div>
        <div className='col2'>
          <p>
            Top Level Domain:
            {country.topLevelDomain[0]}
          </p>
          <p>
            Currencies:
            {country.currencies[0].code}
          </p>
          <p>
            Languages:
            {country.languages[0].nativeName}
          </p>
        </div>
        <p>Border Countries</p>
        {country.borders.map((items) => <Link to={`/data/${Alpha2(items)}`}><input type='button' value={Name(items)} /></Link>)}
      </div>

    </div>

  );
};

export default Country;

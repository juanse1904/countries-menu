import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Expand.scss';

const CountrySelected = ({ alpha2Code }) => {
  console.log('codigo pais', alpha2Code.toUpperCase());
  const country1 = useSelector((state) => state.countryList.find((item) => item.alpha2Code === alpha2Code.toUpperCase()));
  const Name = (alpha1) => {
    const limit = useSelector((state) => state.countryList.find((item) => item.alpha3Code === alpha1));
    return (limit.name);
  };
  const Alpha2 = (alpha1) => {
    const limit = useSelector((state) => state.countryList.find((item) => item.alpha3Code === alpha1));
    return (limit.alpha2Code.toLowerCase());
  };
  console.log('the country selected is:', country1);
  return (
    <div className='infoe'>
      <img src={country1.flag} alt='' />
      <div className='data'>
        <h2>{country1.name}</h2>
        <div className='col1'>

          <p>
            <p>
              Native Name:
              {country1.nativeName}
            </p>
            Population:
            {country1.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </p>
          <p>
            Region:
            {country1.region}
          </p>
          <p>
            Sub Region:
            {country1.subregion}
          </p>
          <p>
            Capital:
            {country1.capital}
          </p>
        </div>
        <div className='col2'>
          <p>
            Top Level Domain:
            {country1.topLevelDomain[0]}
          </p>
          <p>
            Currencies:
            {country1.currencies[0].code}
          </p>
          <p>
            Languages:
            {country1.languages[0].nativeName}
          </p>
        </div>
        <p>Border Countries</p>
        {country1.borders.map((items) => <Link to={`/data/${Alpha2(items)}`}><input type='button' value={Name(items)} /></Link>)}
      </div>

    </div>

  );
};

export default CountrySelected;

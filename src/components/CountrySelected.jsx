
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Expand.scss';
import arrow from '../assets/static/arrow-icon.png';

const CountrySelected = ({ alpha2Code, countryList }) => {

  const country1 = countryList.find((item) => item.alpha2Code === alpha2Code.toUpperCase());

  const Name = (alpha1) => {

    const limit = countryList.find((item) => item.alpha3Code === alpha1);
    return limit.name;
  };
  const Alpha2 = (alpha1) => {
    const limit = countryList.find((item) => item.alpha3Code === alpha1);
    return limit.alpha2Code.toLowerCase();
  };

  console.log('codigo pais', alpha2Code.toUpperCase());

  console.log('the country selected is:', country1);

  return (

    <div className='infoe'>
      <img src={country1.flag} alt='' />
      <div className='dataSelected'>
        <h2>{country1.name}</h2>
        <div className='basicInfo'>
          <div className='col1'>

            <p>
              <strong>Native Name:</strong>
              {country1.nativeName}
            </p>
            <p>

              <strong>Population:</strong>
              {country1.population
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}

            </p>

            <p>
              <strong>Region:</strong>
              {country1.region}
            </p>
            <p>
              <strong>Sub Region:</strong>
              {country1.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {country1.capital}
            </p>
          </div>
          <div className='col2'>
            <p>
              <strong> Top Level Domain:</strong>
              {country1.topLevelDomain[0]}
            </p>
            <p>
              <strong>Currencies:</strong>
              {country1.currencies[0].code}
            </p>
            <p>
              <strong>Languages:</strong>
              {country1.languages[0].nativeName}
            </p>
          </div>
        </div>
        <div className='borders'>
          <p>
            <strong>Borders</strong>
          </p>
          {country1.borders.length > 0 &&
                country1.borders.map((items) => (
                  <Link to={`/data/${Alpha2(items)}`}>
                    <input type='button' className='borderButton' value={Name(items)} />
                  </Link>
                ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryList: state.countryList,
  };
};

export default connect(mapStateToProps, null)(CountrySelected);

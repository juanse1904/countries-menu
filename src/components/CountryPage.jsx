import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/Expand.scss';
import CountrySelected from './CountrySelected';

const countryPage = (props) => {
  const DBcountry = useSelector((state) => state.countryList.find((item) => item.alpha2Code === props.match.params.alpha2Code));
  const [country, setCountry] = useState(DBcountry);
  console.log(props.match.params.alpha2Code);
  console.log(useSelector((state) => state));
  useEffect(() => {
    console.log('entro al Effect', country, props.match.params.alpha2Code);
    if (!DBcountry) {
      console.log('entro al if', country);
      fetch(`https://restcountries.eu/rest/v2/alpha/${props.match.params.alpha2Code}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        });

    }
  }, [props.match.params.alpha2Code]);

  /*   function handleClick() {
    props.history.goBack();
  } */
  console.log('que pasa', country);
  return (
    <div className='countrypage'>
      {country && <CountrySelected country={country} />}
    </div>

  );
};

export default countryPage;

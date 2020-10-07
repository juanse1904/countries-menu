import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/Expand.scss';
import CountrySelected from './CountrySelected';

const countryPage = (props) => {
  const DBcountry = useSelector((state) => state.countryList.find((item) => item.alpha2Code === props.match.params.alpha2Code));
  const [country, setCountry] = useState(DBcountry);
  console.log(props.match.params.alpha2Code);
  console.log('entro al if', country);
  useEffect(() => {

    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${props.match.params.alpha2Code}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        })
        .catch(console.log(e));
    }
  }, [country, props.match.params.alpha2Code]);

  /*   function handleClick() {
    props.history.goBack();
  } */
  return (
    <div className='countrypage'>
      <CountrySelected country={country} />
    </div>

  );
};

export default countryPage;

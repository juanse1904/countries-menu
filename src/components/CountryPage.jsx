import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/Expand.scss';
import fetchcountries from './Home';
import CountrySelected from './CountrySelected';

const countryPage = (props) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countryList);
  console.log(props.match.params.alpha2Code);
  console.log(useSelector((state) => state));
  const fetchcountries = async () => {

    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    dispatch({
      type: 'SET_COUNTRY_LIST',
      payload: data,
    });
    /* el dispatch es el que transporta los argumentos e informacion al
        store, en este caso type para saber que ejecutar en el reducer
        y payload que es el argumento que va a usar la funcion */
    // setCountryList(data)

  };
  if (!allCountries) {
    fetchcountries();
  };
  /*const fetchCountry = async () => {

    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${props.match.params.alpha2Code}`);
    const data = response.json();
    dispatch({
      type: 'SET_COUNTRY_SELECTED',
      payload: data,
    });

  }; */

  /*   function handleClick() {
    props.history.goBack();
  } */
  console.log('que pasa');
  /*  fetchCountry(); */
  return (
    <div className='countrypage'>
      <CountrySelected alpha2Code={props.match.params.alpha2Code} />
    </div>

  );
};

export default countryPage;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/Expand.scss';
import CountrySelected from './CountrySelected';
import arrow from '../assets/static/arrow-icon.png';

const countryPage = (props) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countryList);
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

  // const goBack = () => {
  // props.history.goBack();
  //};
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

  /*  fetchCountry(); */
  function returnPage() {
    props.history.goBack();
  }
  return (
    <>
      <div className='returnButton'>
        <img src={arrow} alt='' onClick={returnPage} />
        <p>Back</p>
      </div>
      <div className='countrypage'>
        <CountrySelected alpha2Code={props.match.params.alpha2Code} />
      </div>
    </>
  );
};

export default countryPage;

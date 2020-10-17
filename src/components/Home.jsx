import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/App.scss';
import Country from './CountryItem';
import Board from './Board';
import Sbar from './Sbar';

/* const inferior = Math.floor(Math.random() * 140); */

const Home = () => {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);
  const filterByRegion = useSelector((state) => state.countryFilteredByRegion);
  /* useselector busca el estado y lo trae al compontente en el que se
  necesite */
  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.CountryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });
  /* countrylist busca en el state cual array está vacio y cual no,
  y devuelve el que tenga contenidos para renderizar */
  // const [countryList, setCountryList] = useState([])
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
  useEffect(() => {
    fetchcountries();
  }, [countryList]);

  return (

    <>

      <Sbar />
      <Board>
        {countryList.map((item) => <Country key={item.alpha2Code} {...item} />) }

      </Board>
    </>
  );

};

export default Home;

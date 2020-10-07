import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/App.scss';
import Sbar from './Sbar';
import Country from './CountryItem';
import Board from './Board';

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
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list,
        });
        /* el dispatch es el que transporta los argumentos e informacion al
        store, en este caso type para saber que ejecutar en el reducer
        y payload que es el argumento que va a usar la funcion */
        // setCountryList(data)
      })
      .catch((e) => {
        console.log('hubo un error, que dolor que dolo que pena', e);
      });
  }, []);
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

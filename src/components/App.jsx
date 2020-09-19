import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from './Header';
import Sbar from './Sbar';
import Country from './Country';
import Board from './Board';

const items = [];
const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((ans) => ans.json()) /* toma la info de la API y la ordena en un JSON */
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Sbar />
      <Board>

        {countries.map((item) => <Country key={item.alpha2Code} {...item} />)}
        ;

      </Board>
    </>
  );

};
export default App;

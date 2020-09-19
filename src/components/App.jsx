import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from './Header';
import Sbar from './Sbar';
import Country from './Country';
import Board from './Board';
import useInitialState from '../hooks/useInitialState';

const API = 'https://restcountries.eu/rest/v2/all';
const inferior = Math.floor(Math.random() * 90);
const App = () => {
  const initialState = useInitialState(API);
  /*
  for (let i = 0;i < 7;i++) {
    items.push(initialState[i]);
  } */
  return (
    <>
      <Header />
      <Sbar />
      <Board>

        {initialState.slice(inferior, inferior + 8).map((item) => <Country key={item.alpha2Code} {...item} />)}

      </Board>
    </>
  );

};
export default App;

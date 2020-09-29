import React from 'react';
import { connect, useSelector } from 'react-redux';
import '../assets/styles/App.scss';
import Sbar from './Sbar';
import Country from './Country';
import Board from './Board';
import useInitialState from '../hooks/useInitialState';

const inferior = Math.floor(Math.random() * 140);

const Home = ({ info }) => {
  const countries = useInitialState(info);
  /*
  for (let i = 0;i < 7;i++) {
    items.push(initialState[i]);
  } */
  return (

    <>
      <Sbar />
      <Board>

        {countries.slice(inferior, inferior + 8).map((item) => <Country key={item.alpha2Code} {...item} />) }

      </Board>
    </>
  );

};
const mapStateToProps = (state) => {
  return {
    info: state.generalapi,
  };

};

export default connect(mapStateToProps, null)(Home);

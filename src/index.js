import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import dataApi from './hooks/Infoapi';

const API = 'https://restcountries.eu/rest/v2/all';

const initialState = {
  generalapi: dataApi(API),
  byregion: [],
  byname: [],
};

const store = createStore(reducer, initialState); /* crea el store, entendiendo
como base de datos global de la app */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app'),
);
//lo que esta realziando es buscar el archivo Helloworld.jsx y renderizarlo en la etiqueta de html con id 'app'//


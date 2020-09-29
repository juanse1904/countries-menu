import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  countryList: [],
  countryListByName: [],
  CountryFilteredByRegion: [],
  filterByRegion: '',
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


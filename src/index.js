import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  countryList: [],
  countryListByName: [],
  CountryFilteredByRegion: [],
  filterByRegion: '',
  CountrySelected: {},
};
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};
function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const persistedState = () => {
  console.log('ist working?');
  if (initialState.countryList.length !== 0) {
    return initialState;
  }
  return loadFromLocalStorage;

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers()); /* crea el store, entendiendo
como base de datos global de la app */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app'),
);
store.subscribe(() => saveToLocalStorage(store.getState()));
//lo que esta realziando es buscar el archivo Helloworld.jsx y renderizarlo en la etiqueta de html con id 'app'//


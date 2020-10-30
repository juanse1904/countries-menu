import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import getInitialState from './utils/getInitialState';
import saveToLocalStorage from './utils/saveToLocalStorage';

const initialState = getInitialState();

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

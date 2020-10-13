import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  countryList: [],
  countryListByName: [],
  CountryFilteredByRegion: [],
  filterByRegion: '',
  CountrySelected: {},
};
const persistConfig = {
  key: 'SET_COUNTRY_LIST',
  storage,
  whitelist: ['SET_COUNTRY_LIST'], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(pReducer, initialState, composeEnhancers()); /* crea el store, entendiendo
como base de datos global de la app */
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById('app'),
);
//lo que esta realziando es buscar el archivo Helloworld.jsx y renderizarlo en la etiqueta de html con id 'app'//


import { persisReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_REGION': {
      const { regionselected } = action.payload;
      const countries = state.countryList;
      const CountryFilteredByRegion = countries.filter((country) => country.region === regionselected);
      console.log('filtrando', CountryFilteredByRegion);
      console.log('chekeo de state', countries);
      return {
        ...state,
        CountryFilteredByRegion,
        filterByRegion: regionselected,
      };
    };
    case 'SET_COUNTRY_LIST':

      return {
        ...state,
        countryList: action.payload, /*se toma el estado (objeto que se enucentra
              en el index principal) y se desestructura (state...) y se toma la
              llave counytryList y se ñe asigna action.payload(argumento que trajo dispatch)  */
      };
    default:
      return state;
  }
};

export default reducer;

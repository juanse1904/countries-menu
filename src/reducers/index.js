
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
    case 'SET_COUNTRY_SELECTED':
      console.log('country selected', action.payload);
      return {
        ...state,
        CountrySelected: action.payload, /*se toma el estado (objeto que se enucentra
                en el index principal) y se desestructura (state...) y se toma la
                llave counytryList y se ñe asigna action.payload(argumento que trajo dispatch)  */
      };
    case 'SET_COUNTRY_BYNAME': {
      let list;
      if (state.filterByRegion !== '') {
        list = state.coutryFilteredByRegion;
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase()));
      return { ...state, countryListByName };
    };

    default:
      return state;
  }
};

export default reducer;

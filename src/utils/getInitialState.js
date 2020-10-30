function loadFromLocalStorage(defaultState) {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return defaultState;
    console.log('loadFromLocalStorage -> serializedState', JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
    return defaultState;
  }
}

const defaultState = {
  countryList: [],
  countryListByName: [],
  CountryFilteredByRegion: [],
  filterByRegion: '',
  CountrySelected: {},
};

export default function getInitialState() {
  return loadFromLocalStorage(defaultState);
}

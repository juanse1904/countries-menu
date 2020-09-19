import { useState, useEffect } from 'react';

const items = [];
const useInitialState = (API) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((ans) => ans.json()) /* toma la info de la API y la ordena en un JSON */
      .then((data) => setCountries(data));
  }, []);
  
  return countries;
};
export default useInitialState;


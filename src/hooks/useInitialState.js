import { useState, useEffect } from 'react';

const useInitialState = (prom) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
     /* toma la info de la API y la ordena en un JSON */
      prom.then((data) => setCountries(data));
  }, []);
  return countries;
};
export default useInitialState;


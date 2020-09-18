import React from 'react';

fetch('https://restcountries.eu/rest/v2/alpha/col')
.then(ans=>ans.json())  
.then((data) => {
    var datos={
        bandera: data.flag,
        capital:data.capital,
        name:data.name,
        population:data.population,
        region:data.region,

    }
    
})
const country = () => (

      <div className='infoc'>
        <img src={datos.flag} alt='' />
        <div className='data'>
          <h2>{data.name}</h2>
          <p>{data.population}</p>
          <p>{data.region}</p>
          <p>{data.capital}</p>
        </div>
      </div>;

);

export default country;


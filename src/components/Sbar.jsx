import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import search from '../assets/static/search.png';
import '../assets/styles/Sbar.scss';

const filterByRegionSelected = (regionselected) => {
  console.log('entree', regionselected);
  return {
    type: 'FILTER_BY_REGION',
    payload: { regionselected },
  };
};

const Sbar = (props) => {
  const [dropdown, setdropdown] = useState(false);
  /*  const [dropdown, setdropdown] = useState(false);
  const filterByRegion = useSelector((state) => state.filterByRegion); */
  const dispatch = useDispatch();
  const onRegionChange = (selectEvent) => {

    dispatch(filterByRegionSelected(selectEvent));
  };

  function countryByName(e) {
    props.countryforName(e.target.value);
  }
  return (
    <div className='infobar'>
      <div className='sbar'>
        <img src={search} alt='' />
        <input type='text' placeholder='Search for a Country...' onChange={countryByName} />
      </div>

      <div className={`${dropdown ? 'dropdown open' : 'dropdown'}`} onClick={() => setdropdown(!dropdown)} id='filter'>
        Filter by Region
        <i className='fas fa-chevron-down' />
        <ul>
          <li onClick={() => onRegionChange('Africa')}>Africa</li>
          <li onClick={() => onRegionChange('Americas')}>Americas</li>
          <li onClick={() => onRegionChange('Asia')}>Asia</li>
          <li onClick={() => onRegionChange('Europe')}>Europe</li>
          <li onClick={() => onRegionChange('Oceania')}>Oceania</li>
        </ul>
      </div>

    </div>
  );
};

const countryforName = (payload) => ({
  type: 'SET_COUNTRY_BYNAME',
  payload,
});
const mapDispatchToProps = {
  countryforName,

};
export default connect(null, mapDispatchToProps)(Sbar);


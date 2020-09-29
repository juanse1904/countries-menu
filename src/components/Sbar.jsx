import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import search from '../assets/static/search.png';
import '../assets/styles/Sbar.scss';

const filterByRegionSelected = (regionselected) => {
  console.log('entree', regionselected);
  return {
    type: 'FILTER_BY_REGION',
    payload: { regionselected },
  };
};
const Sbar = () => {
  const dispatch = useDispatch();
 /*  const [dropdown, setdropdown] = useState(false);
  const filterByRegion = useSelector((state) => state.filterByRegion); */

  const onRegionChange = (selectEvent) => {
    console.log('filtrando por region', selectEvent);
    dispatch(filterByRegionSelected(selectEvent));
  };

  return (
    <div className='infobar'>
      <div className='sbar'>
        <img src={search} alt='' />
        <input type='text' placeholder='Search for a Country...' />
      </div>
      <div className='options'>
        <ul name='lista desplegable' placeholder='Filter By Region'>
          <li value='' onClick={() => onRegionChange('Africa')}>Africa</li>
          <li value='' onClick={() => onRegionChange('Americas')}>America</li>
          <li value='' onClick={() => onRegionChange('Asia')}>Asia</li>
          <li value='' onClick={() => onRegionChange('Europe')}>Europe</li>
          <li value='' onClick={() => onRegionChange('Oceania')}>Oceania</li>
        </ul>
      </div>
    </div>
  );
};
export default Sbar;


import React from 'react';
import { connect } from 'react-redux';
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

  /*  const [dropdown, setdropdown] = useState(false);
  const filterByRegion = useSelector((state) => state.filterByRegion); */

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

      <select name='lista desplegable' placeholder='Filter By Region' className='options'>
        <option value='' onClick={() => onRegionChange('Africa')}>Africa</option>
        <option value='' onClick={() => onRegionChange('Americas')}>America</option>
        <option value='' onClick={() => onRegionChange('Asia')}>Asia</option>
        <option value='' onClick={() => onRegionChange('Europe')}>Europe</option>
        <option value='' onClick={() => onRegionChange('Oceania')}>Oceania</option>
      </select>

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


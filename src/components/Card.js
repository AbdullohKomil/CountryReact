import './Form.css';
import './General.css';
import './Country.css';
import Flag from './flag-germany.jpg';
function CountryCard() {
  return (
    <div className='country__card'>
      <img
        className='country__img'
        src={Flag}
        alt='...'
      />
      <h3 className='country__title'>Germany</h3>
      <ul className='country__list'>
        <li className='country__item'>Population: 81,770,900</li>
        <li className='country__item'>Region: Europe</li>
        <li className='country__item'>Capital: Berlin</li>
      </ul>
    </div>
  );
}

export default CountryCard;

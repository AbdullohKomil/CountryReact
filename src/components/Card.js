import './Form.scss';
import './General.scss';
import './Country.scss';
import Flag from './flag-germany.jpg';

function CountryCard(props) {
  console.log();
  return (
    <div className='country__card'>
      <img
        className='country__img'
        src={props.img}
        alt='...'
        width={"300px"}
      />
      <h3 className='country__title'>{props.name}</h3>
      <ul className='country__list'>
        <li className='country__item'>Population: {props.population}</li>
        <li className='country__item'>Region: {props.region}</li>
        <li className='country__item'>Capital: {props.capital}</li>
      </ul>
    </div>
  );
}

export default CountryCard;

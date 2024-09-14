import React from 'react';
import './Card.scss';
import FlagGermany from '../../assets/images/FlagGermany.svg';
export const Card = () => {
  return (
    <div className='card'>
      <img src={FlagGermany} alt='flag germany' />
      <div className='card__content'>
        <h3 className='card__title'>Germany</h3>
        <ul className='card__list'>
          <li className='card__item'>
            <strong>Population:</strong> 81,770,900
          </li>
          <li className='card__item'>
            <strong>Region:</strong> Europe
          </li>
          <li className='card__item'>
            <strong>Capital:</strong> Berlin
          </li>
        </ul>
      </div>
    </div>
  );
};

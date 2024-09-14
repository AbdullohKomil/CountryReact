import React from 'react';
import './Header.scss';
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <h3 className='header__title'>
            <a href='/'>Where in the world?</a>
          </h3>
          <button className='header__mode'>Dark Mode</button>
        </div>
      </div>
    </header>
  );
};

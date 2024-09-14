import React from 'react';
import './Form.scss';
export const Form = () => {
  return (
    <section className='form'>
      <div className='container'>
        <div className='form__inner'>
          <input
            type='text'
            placeholder='Search for a country…'
            className='form__search'
          />
          <span className='form__icon' ></span>
          <select className='form__filter' defaultValue='default'>
            <option value='default' disabled>
              Filter by Region
            </option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import './Cards.scss';
import { Card } from '../Card/Card';

export const Cards = () => {
  return (
    <section className='cards'>
      <div className='container'>
        <div className='cards__inner'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

import './Form.css';
import './General.css';
import './Country.css';
import CountryCard from './Card';
function Country() {
  return (
    <section className='country'>
      <div className='container'>
        <div className='country__inner'>
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </div>
    </section>
  );
}

export default Country;

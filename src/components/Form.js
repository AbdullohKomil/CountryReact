import './Form.css';
import './General.css'; 

function Form() {
  return (
    <section className='form__sect'>
      <div className='container'>
        <form className='form'>
          <input
            className='form__input'
            placeholder='Search for a country…'
            type={'text'}
          />
          <select className='form__select'>
            <option className='form__option'>Filter by Region</option>
            <option className='form__option'>Africa</option>
            <option className='form__option'>America</option>
            <option className='form__option'>Asia</option>
            <option className='form__option'>Europe</option>
            <option className='form__option'>Oceania</option>
          </select>
        </form>
      </div>
    </section>
  );
}

export default Form;

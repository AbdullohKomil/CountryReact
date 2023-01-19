import './Header.css';
import './General.css';

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <ul className='navbar__list'>
            <li className='title__item'>Where in the world?</li>
            <li className='mode__item'>
              <button className='mode__button'>Dark Mode</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import './Header.css';
import logo from '../../images/header-logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <a className='header__homelink' href='*'>
        <img className='header__logo' src={logo} alt='logo'></img>
      </a>
      <div className='header__links'>
        <a className='header__link link outline' href='*'>
          Home
        </a>
        <a className='header__link link outline' href='*'>
          About Us
        </a>
        <a className='header__link link outline' href='*'>
          Services
        </a>
        <a className='header__link link outline' href='*'>
          Pages
        </a>
        <a className='header__link link outline' href='*'>
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;

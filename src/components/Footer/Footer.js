import './Footer.css';
import logo from '../../images/header-logo.svg';
import facebook from '../../images/facebook logo.svg';
import twitter from '../../images/twitter logo.svg';
import inlogo from '../../images/in logo.svg';
import instagram from '../../images/instagram logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__column'>
          <img className='footer__logo' src={logo} alt='interno logo'></img>
          <p className='footer__slogan'>
            We are the leading architect and interior design firm in the world.
          </p>
          <div className='footer__socials'>
            <a className='footer__social-link link' href='*'>
              <img src={facebook} alt='social logo'></img>
            </a>
            <a className='footer__social-link link' href='*'>
              <img src={twitter} alt='social logo'></img>
            </a>
            <a className='footer__social-link link' href='*'>
              <img src={inlogo} alt='social logo'></img>
            </a>
            <a className='footer__social-link link' href='*'>
              <img src={instagram} alt='social logo'></img>
            </a>
          </div>
        </div>
        <div className='footer__column'>
          <h3 className='footer__link_title'>Pages</h3>
          <p className='footer__link outline link'>Style Guide</p>
          <p className='footer__link outline link'>Protected</p>
          <p className='footer__link outline link'>Licenses</p>
          <p className='footer__link outline link'>Changelog</p>
          <p className='footer__link outline link'>404</p>
        </div>
        <div className='footer__column'>
          <h3 className='footer__link_title'>Explore</h3>
          <p className='footer__link outline link'>About Us</p>
          <p className='footer__link outline link'>Recent Blog</p>
          <p className='footer__link outline link'>Pricing Plan</p>
          <p className='footer__link outline link'>Our Projects</p>
          <p className='footer__link outline link'>Contact Us</p>
        </div>
        <div className='footer__column'>
          <h3 className='footer__link_title'>Contact</h3>
          <p className='footer__link'>
            53, East Birchwood Ave. Brooklyn, New York 11201, USA.
          </p>
          <p className='footer__link'>contact@interno.com</p>
          <p className='footer__link'>(123) 456 - 7890</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='copyright_text'>Copyright © Interno | Designed by</p>
        <a
          className='copyright_text_name link outline'
          href='https://www.victorflow.com'
          target='_blank'
          rel='noreferrer'
        >
          Victorflow
        </a>
        <p className='copyright_text'>Templates - Powered by</p>
        <a
          className='copyright_text_name link outline'
          href='https://webflow.com'
          target='_blank'
          rel='noreferrer'
        >
          Webflow
        </a>
        <p className='copyright_text'>Made by</p>
        <a
          className='copyright_text_name link outline'
          href='https://github.com/Maxi-Mini'
          target='_blank'
          rel='noreferrer'
        >
          Maxim Tarakhov
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import './Call.css';
import photo from '../../images/2.svg';
import phone from '../../images/phone button.svg';
import arrow from '../../images/arrow.svg';

const Call = () => {
  return (
    <section className='call'>
      <div className='call__container'>
        <h2 className='call__title'>We Tackle The Most Challenging Designs</h2>
        <p className='call__subtitle'>
          The world needs innovators and problem solvers who turn challenges
          into greater opportunities. We have an insatiable curiosity about
          transformative trends challenging the status.
        </p>
        <div className='call__phone'>
          <img
            className='phone__image'
            src={phone}
            alt='phone'
          ></img>
          <div className='phone__container'>
            <p className='phone__number'>012345678</p>
            <p className='phone__description'>Call Us Anytime</p>
          </div>
        </div>
        <a className='call__link link' href='*'>
          <p className='call__link_text'>Get Free Estimate</p>
          <img className='call__link_image' src={arrow} alt='arrow'></img>
        </a>
      </div>
      <img className='call__image' src={photo} alt='photography'></img>
    </section>
  );
};

export default Call;

import './Join.css';
import arrow from '../../images/black arrow.svg';

const Join = () => {
  return (
    <section className='join'>
      <h2 className='join__title'>Wanna join the interno?</h2>
      <p className='join__subtitle'>Contact Us & Get a Free Consultation</p>
      <a className='join__button link' href='*'>
        <p className='button__text'>Connect With us</p>
        <img className='button__image' src={arrow} alt='arrow'></img>
      </a>
    </section>
  );
};

export default Join;

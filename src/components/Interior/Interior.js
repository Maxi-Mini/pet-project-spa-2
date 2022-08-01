import './Interior.css';
import photo from '../../images/1.svg';
import arrow from '../../images/arrow.svg'

const Interior = () => {
  return (
    <section className='interior'>
      <img
        className='interior__background'
        src={photo}
        alt='photography of the room'
      ></img>
      <div className='interior__container'>
        <h1 className='interior__header'>Let's Create Your Dream Interior</h1>
        <p className='interior__text'>
          The world needs innovators and problem solvers who turn challenges
          into greater opportunities.
        </p>
        <a className='interior__button link' href='*'>
            <p className='interior__button_text'>Get Started</p>
            <img className='interior__button_arrow' src={arrow} alt='arrow'></img>
        </a>
        
      </div>
    </section>
  );
};

export default Interior;

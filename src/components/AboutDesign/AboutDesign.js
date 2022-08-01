import './AboutDesign.css';
import arrow from '../../images/arrow.svg';

const AboutDesign = () => {
  return (
    <section className='design'>
      <div className='design__container'>
        <h3 className='design__title'>Design</h3>
        <p className='design__subtitle'>
          Enhancing the design to achieve a healthier environment for the
          people using right space.
        </p>
        <a className='design__link link' href='*'>
          <p className='design__link_text'>View More</p>
          <img className='design__link_arrow' src={arrow} alt='arrow'></img>
        </a>
      </div>
      <div className='design__container'>
        <h3 className='design__title'>Furniture</h3>
        <p className='design__subtitle'>
          Movable articles that are used to make a room or building suitable for
          living or working.
        </p>
        <a className='design__link link' href='*'>
          <p className='design__link_text'>View More</p>
          <img className='design__link_arrow' src={arrow} alt='arrow'></img>
        </a>
      </div>
      <div className='design__container'>
        <h3 className='design__title'>Flooring</h3>
        <p className='design__subtitle'>
          Thin object any finished material applied over a floor structure to
          provide a walking surface.
        </p>
        <a className='design__link link' href='*'>
          <p className='design__link_text'>View More</p>
          <img className='design__link_arrow' src={arrow} alt='arrow'></img>
        </a>
      </div>
    </section>
  );
};

export default AboutDesign;

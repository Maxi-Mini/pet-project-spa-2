import './Projects.css';
import img1 from '../../images/3.svg';
import img2 from '../../images/4.svg';
import img3 from '../../images/5.svg';
import img4 from '../../images/6.svg';
import arrow from '../../images/circle arrow.svg';
const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects__text'>
        <h2 className='projects__title'>Recent Projects</h2>
        <p className='projects__subtitle'>
          With tools to make every part of your process more human and a support
          team excited to help you, getting started with us never been easier.
        </p>
      </div>
      <div className='projects__content'>
        <div className='projects__container'>
          <img className='content__image' src={img1} alt='photography'></img>
          <div className='content__description'>
            <div className='content__text'>
              <h3 className='content__title'>Winery Dry Creek Building</h3>
              <p className='content__subtitle'>Art Modern</p>
            </div>
            <a className='content__button link' href='*'>
              <img
                className='content__button_image'
                src={arrow}
                alt='button'
              ></img>
            </a>
          </div>
        </div>
        <div className='projects__container'>
          <img className='content__image' src={img2} alt='photography'></img>
          <div className='content__description'>
            <div className='content__text'>
              <h3 className='content__title'>Creative Workplace Design</h3>
              <p className='content__subtitle'>Minimalist</p>
            </div>
            <a className='content__button link' href='*'>
              <img
                className='content__button_image'
                src={arrow}
                alt='button'
              ></img>
            </a>
          </div>
        </div>
        <div className='projects__container'>
          <img className='content__image' src={img3} alt='photography'></img>
          <div className='content__description'>
            <div className='content__text'>
              <h3 className='content__title'>Bedroom Interior Pot Work</h3>
              <p className='content__subtitle'>Modern</p>
            </div>
            <a className='content__button link' href='*'>
              <img
                className='content__button_image'
                src={arrow}
                alt='button'
              ></img>
            </a>
          </div>
        </div>
        <div className='projects__container'>
          <img className='content__image' src={img4} alt='photography'></img>
          <div className='content__description'>
            <div className='content__text'>
              <h3 className='content__title'>Light Ambience Sepia Design</h3>
              <p className='content__subtitle'>Scandinavian</p>
            </div>
            <a className='content__button link' href='*'>
              <img
                className='content__button_image'
                src={arrow}
                alt='button'
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

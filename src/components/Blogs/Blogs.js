import './Blogs.css';
import arrow from '../../images/circle arrow.svg';
import photo1 from '../../images/7.svg';
import photo2 from '../../images/8.svg';
import photo3 from '../../images/9.svg';
import photo4 from '../../images/10.svg';
import photo5 from '../../images/11.svg';
import photo6 from '../../images/12.svg';

const BLogs = () => {
  return (
    <section className='blogs'>
      <h2 className='blogs__title'>Recent Blogs</h2>
      <p className='blogs__subtitle'>
        Get updates about our latest trends and techniques used in interior
        design project works.
      </p>
      <div className='blogs__content'>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo1}
            ></img>
            <p className='photo__name'>Kitchen Design</p>
          </div>
          <h3 className='content__text'>
            Residential Interior Designer In New York, USA
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo2}
            ></img>
            <p className='photo__name'>Living Room</p>
          </div>
          <h3 className='content__text'>
            How To Choose The Best Wall Art & Decor House?
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo3}
            ></img>
            <p className='photo__name'>Minimalist Interior</p>
          </div>
          <h3 className='content__text'>
            Tips To Increase The Interior Value Of Your House
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo4}
            ></img>
            <p className='photo__name'>Kitchen Design</p>
          </div>
          <h3 className='content__text'>
            Best Solution For Any Office & Business Interior
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo5}
            ></img>
            <p className='photo__name'>Living Room</p>
          </div>
          <h3 className='content__text'>
            Get Solution For Building Construction Work
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
        <div className='content__container'>
          <div className='content__image'>
            <img
              className='content__photo'
              alt='photography'
              src={photo6}
            ></img>
            <p className='photo__name'>Minimalist Interior</p>
          </div>
          <h3 className='content__text'>
            Attain The Best Finish For The Kitchen Cabinets
          </h3>
          <div className='content__info'>
            <p className='info__date'>November 23, 2021</p>
            <a className='info__button link' href='*'>
              <img className='info__button_image' src={arrow} alt='arrow'></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLogs;

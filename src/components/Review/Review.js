import './Review.css';
import photo1 from '../../images/people 1.svg';
import photo2 from '../../images/people 2.svg';
import photo3 from '../../images/people 3.svg';
const Review = () => {
  return (
    <section className='review'>
      <h2 className='review__title'>What the People Thinks About Interno</h2>
      <div className='review__container'>
        <div className='review__content'>
          <div className='review__user'>
            <img
              className='user__photo'
              src={photo1}
              alt='user photography'
            ></img>
            <div className='user__description'>
              <h3 className='user__name'>Lisa Clairton</h3>
              <p className='user__place'>New York, USA</p>
            </div>
          </div>
          <p className='review__text'>
            We selected Interno interior because of rigorous design background &
            education.
          </p>
        </div>
        <div className='review__content'>
          <div className='review__user'>
            <img
              className='user__photo'
              src={photo2}
              alt='user photography'
            ></img>
            <div className='user__description'>
              <h3 className='user__name'>David Knight</h3>
              <p className='user__place'>Sydney, Australia</p>
            </div>
          </div>
          <p className='review__text'>
            The team exceeded our expectations and emerged as leaders of our
            project’s.
          </p>
        </div>
        <div className='review__content'>
          <div className='review__user'>
            <img
              className='user__photo'
              src={photo3}
              alt='user photography'
            ></img>
            <div className='user__description'>
              <h3 className='user__name'>Lisa Clairton</h3>
              <p className='user__place'>Paris, France</p>
            </div>
          </div>
          <p className='review__text'>
            They balanced the architectural vision and the project realities
            beautifully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;

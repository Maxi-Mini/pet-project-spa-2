import './Brands.css'
import brand1 from '../../images/modern logo.svg';
import brand2 from '../../images/vs logo.svg';
import brand3 from '../../images/brand logo.svg';
import brand4 from '../../images/nature logo.svg';
import brand5 from '../../images/classic logo.svg';

const Brands = () => {
  return (
    <section className='brand'>
      <img className='brand__logo' src={brand1} alt='logo'></img>
      <img className='brand__logo' src={brand2} alt='logo'></img>
      <img className='brand__logo' src={brand3} alt='logo'></img>
      <img className='brand__logo' src={brand4} alt='logo'></img>
      <img className='brand__logo' src={brand5} alt='logo'></img>
    </section>
  );
};

export default Brands;

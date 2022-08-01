import './App.css';
import Header from '../Header/Header';
import Interior from '../Interior/Interior';
import AboutDesign from '../AboutDesign/AboutDesign';
import Call from '../Call/Call';
import Review from '../Review/Review';
import Brands from '../Brands/Brands';
import Projects from '../Projects/Projects';
import Static from '../Static/Static';
import BLogs from '../Blogs/Blogs';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Interior/>
      <AboutDesign/>
      <Call/>
      <Review/>
      <Brands/>
      <Projects/>
      <Static/>
      <BLogs/>
      <Join/>
      <Footer/>
    </div>
  );
};

export default App;

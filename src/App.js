
import { useState } from 'react';
import './App.scss';
import About from './components/About';
import Attribution from './components/Attribution';
import ImageBox from './components/ImageBox';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import SliderControls from './components/SliderControls';
import aboutDark from './assets/images/image-about-dark.jpg';
import aboutLight from './assets/images/image-about-light.jpg';
import bg1 from './assets/images/desktop-image-hero-1.jpg';
import bg1Mob from './assets/images/mobile-image-hero-1.jpg';
import bg2 from './assets/images/desktop-image-hero-2.jpg';
import bg2Mob from './assets/images/mobile-image-hero-2.jpg';
import bg3 from './assets/images/desktop-image-hero-3.jpg';
import bg3Mob from './assets/images/mobile-image-hero-3.jpg';

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      title: 'Discover innovative ways to decorate',
      info: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
      url: bg1,
      mobileUrl: bg1Mob
    },
    {
      title: 'We are available all across the globe',
      info: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. 
      Any questions? Don't hesitate to contact us today.`,
      url: bg2,
      mobileUrl: bg2Mob,
    },
    {
      title: 'Manufactured with the best materials',
      info: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
      url: bg3,
      mobileUrl: bg3Mob,
    },
  ]
  const slide = slides[slideIndex];
  const nextSlide = () => {
    let index = slideIndex + 1;
    if (index > (slides.length - 1)) {
      index = 0;
    }
    setSlideIndex(index);
  }

  const prevSlide = () => {
    let index = slideIndex - 1;
    if (index < 0) {
      index = slides.length - 1;
    }
    setSlideIndex(index);
  }

  return (
    <div className="App">
      <div className='grid'>
        <Navigation slide={slide} />
        <Slider slide={slide} />
        <SliderControls nextSlide={nextSlide} prevSlide={prevSlide} />
        <ImageBox className='left' src={aboutDark} alt='chairs and a table with a bowl on it' />
        <About />
        <ImageBox className='right' src={aboutLight} alt='white chair' />
      </div>
      <Attribution />
    </div>
  );
}

export default App;

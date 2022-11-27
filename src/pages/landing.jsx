import FlashScroll from '../components/FlashScroll';
import CalendarScroll from '../components/CalendarScroll';
import { useEffect, useState } from 'preact/hooks';

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);
  
  // add login in here for banner to cover screen until calendar and flash are loaded
  // maybe even just a simple spinner
  useEffect(() => {
    setTimeout(() => {
      setButtonLoad(true);
    }, 1500);
  }, []);

  const enterClick = (e) => {
    e.preventDefault();
    setIsLoaded(true);
    setTimeout(() => {
      const landingCover = document.getElementById('landing-cover');
      landingCover.style.display = 'none';
    }, 2500);
  }

  return (
    <div className="flex flex-col sm:flex-row min-w-full min-h-screen">
        <div id="landing-cover">
          <img src="" alt="Strawberry with sexy librarian glasses" />
          <h3>Welcome to</h3>
          <h1>Gentle Scratchess Tattoo</h1>
          <div className='m-2 p-3 h-10 w-15'>
            { buttonLoad && 
              <button 
              onClick={enterClick}
              className='text-gray-200 animate-bounce'
              id='landing-btn'
              >
                {!isLoaded ? 'Enter' : 'Come on in!'}
              </button>
            }
          </div>
        </div>
        {isLoaded &&
          <>
            <FlashScroll />
            <CalendarScroll />
          </>
        }
    </div>
  );
};

export default Landing;

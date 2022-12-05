import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'wouter/preact'
import landingLogo from '../assets/LandingLogo.png';
import redLogo from '../assets/RedLandingLogo.png';

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setButtonLoad(true);
    }, 1500);
  }, []);

  const enterClick = (e) => {
    e.preventDefault();
    setIsLoaded(true);
    setTimeout(() => {
      setLocation('/home');
    }, 2500);
  }

  return (
    <div className="flex flex-col sm:flex-row min-w-full min-h-screen">
      <div id="landing-cover">
        <div id='logo' className='mb-12'/>
        <h3>Welcome to</h3>
        <h1>Gentle Scratches Tattoo</h1>
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
    </div>
  );
};

export default Landing;

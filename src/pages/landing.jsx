import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'wouter/preact'
import bubble from '../assets/speechBubble.svg';

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const logo = document.getElementById('logo');
    const hoverBubble = document.getElementById('bubble');
    const berryTalk = document.getElementById('berrytalk')
    logo.addEventListener('mouseenter', () => {
      hoverBubble.style.display = 'block';
      berryTalk.style.display = 'block';
    });
    logo.addEventListener('mouseleave', () => {
      hoverBubble.style.display = 'none';
      berryTalk.style.display = 'none';
    });
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
        <div className='flex relative'>
          <div id='logo' className='mb-12'onClick={enterClick}/>
          <img src={bubble} alt="" id="bubble" className='hidden'/>
          <p id='berrytalk' className='hidden'>Enter</p>
        </div>
        <h3>Welcome to</h3>
        <h1>Gentle Scratches Tattoo</h1>
      </div>
    </div>
  );
};

export default Landing;

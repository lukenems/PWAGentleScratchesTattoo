import FlashScroll from '../components/FlashScroll';
import CalendarScroll from '../components/CalendarScroll';

const Landing = () => {
  return(
    <div className='flex flex-col sm:flex-row min-w-full min-h-screen'>
        <FlashScroll />
        <CalendarScroll />
    </div>
  )
}

export default Landing
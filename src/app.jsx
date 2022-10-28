import './app.css';
import Nav from './components/Nav';
import FlashScroll from './components/FlashScroll';
import CalendarScroll from './components/CalendarScroll';

export function App() {

  return (
    <>
    <Nav />
    <div className='flex flex-col sm:flex-row min-w-full'>
      <FlashScroll />
      <CalendarScroll />
    </div>
    </>
  );
}

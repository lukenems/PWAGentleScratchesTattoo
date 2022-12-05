import CalendarScroll from "../components/CalendarScroll";
import FlashScroll from "../components/FlashScroll";
import './home.css';

const Home = () => {

  return (
    <div className="flex flex-col sm:flex-row min-w-full min-h-screen">
      <FlashScroll />
      <CalendarScroll />
    </div>
  )
}

export default Home;
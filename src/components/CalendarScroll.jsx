import '@nylas/components-agenda';
import { useEffect, useState } from 'preact/hooks';

const CalendarScroll = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const diffTime = Math.abs(firstDayOfMonth - lastDayOfMonth);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const [dayArray, setDayArray] = useState('');

  useEffect(() => {
    for (let day in dayArray) {
      if ( day === 'length') { break };
      dayArray[day].shadowRoot.children[2].firstElementChild.style.display = 'none';
    }
  }, [dayArray]);

  return (
    <div className=" flex bg-indigo-600 sm:flex-row sm:w-screen sm:h-screen calendar-scroll">
      <div className="grid grid-cols-7 gap-0 h-screen overflow-auto">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {Array(firstDayOfMonth.getDay())
          .fill(1)
          .map((_, i) => (
            <div key={i} />
          ))}
        {Array.from({ length: diffDays }, (_, i) => {
          const selected_date = new Date(
            today.getFullYear(),
            today.getMonth(),
            i + 1
          );
          return (
            <div key={selected_date.toISOString()} style={'border-top: white 1px solid'}>
              {selected_date.getDate()}
              <nylas-agenda
                header_type="none"
                selected_date={selected_date}
                condensed_view={true}
                id={import.meta.env.VITE_NYLAS_CALENDAR_ID}
                allowed_dates
                hide_current_time={true}
                show_no_events_message="Available"
                theme="theme-1"
                className="date"
              />
            </div>
          );
        })}
      </div>
      <button
        className="fixed bottom-4 w-1/3"
        style="right: 10%;"
      >
        <a href="https://schedule.nylas.com/gentlescratches-45min" style="color: white;">Book it</a>
      </button>
      {(document.getElementsByTagName('nylas-agenda')) ? setDayArray(document.getElementsByTagName('nylas-agenda')) : console.log() }
    </div>
  );
};

export default CalendarScroll;

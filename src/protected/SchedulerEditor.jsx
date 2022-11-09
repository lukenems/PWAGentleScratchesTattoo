import { useEffect } from "preact/hooks";

const SchedulerEditor = () => {
  
  useEffect( () => {
  const btn = document.getElementById('schedule-editor');
  btn.addEventListener('click', function () {
    nylas.scheduler.show({
      auth: {
        accessToken:import.meta.env.VITE_NYLAS_ACCESS_TOKEN,
      },
      style: {
        // Style the schdule editor
        tintColor: '#32325d',
        backgroundColor: 'white',
      },
      defaults: {
        event: {
          title: 'Tattoo Appointment',
          duration: 90,
        },
      },
    });
  });
}, [])

  return (
    <div className="relative">
      <button
        id="schedule-editor"
        className="fixed bottom-4 w-1/3"
        style="right: 10%;"
      >
        Update Your Schedule
      </button>
    </div>
  );
};

export default SchedulerEditor;

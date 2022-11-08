import { useEffect } from "preact/hooks";

const SchedulerEditor = () => {
  
  useEffect( () => {
  const btn = document.getElementById('schedule-editor');
  btn.addEventListener('click', function () {
    nylas.scheduler.show({
      auth: {
        // Account <ACCESS_TOKEN> with active calendar scope
        accessToken: 'ZKG8EGSBz9WkHfAi81jpcAMisdsZWY',
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
        Launch Schedule Editor
      </button>
    </div>
  );
};

export default SchedulerEditor;

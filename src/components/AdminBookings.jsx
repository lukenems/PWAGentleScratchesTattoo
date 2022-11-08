import SchedulerEditor from './SchedulerEditor';

const AdminBookings = () => {
  const today = new Date();
  const selected_date = new Date(
    today.getFullYear(),
    today.getMonth()
  )

  return (
    <>
      <nylas-agenda
        header_type="none"
        selected_date={selected_date}
        condensed_view={true}
        id="e734ac6e-caa5-4b17-a5e9-97d39dbe7ad7"
        allowed_dates
        hide_current_time={true}
        show_no_events_message="Available"
        theme="theme-1"
        className="date"
      />
      <SchedulerEditor />
    </>
  )
}

export default AdminBookings;
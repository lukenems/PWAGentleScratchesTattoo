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
        id={import.meta.env.VITE_NYLAS_CALENDAR_ID}
        allowed_dates
        hide_current_time={true}
        show_no_events_message="Available"
        theme="theme-1"
      />
      <SchedulerEditor />
    </>
  )
}

export default AdminBookings;
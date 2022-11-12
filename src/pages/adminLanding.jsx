import SchedulerEditor from '../protected/SchedulerEditor';


const AdminLanding = () => {
  const today = new Date();
  const selected_date = new Date(
  )

  return (
    <div className="bg-gradient-to-r from-green-500 via-transparent to-green-500 h-full">
      <div className="flex flex-col flex-between justify-around sm:flex-row">
        <div className="flex flex-col w-1/3 items-center py-12 px-4 sm:px-3 lg:px-4">
          <h1>First</h1>
          <h1>Full</h1>
        </div>
        <div className="flex flex-col w-1/3 items-center text-center py-12 px-4 sm:px-3 lg:px-4">
          <h1>Upcoming Bookings</h1>
          <div className="h-200px">
          <nylas-agenda
            header_type="full"
            allow_date_change={true}
            selected_date={selected_date}
            condensed_view={true}
            id={import.meta.env.VITE_NYLAS_CALENDAR_ID}
            allowed_dates
            hide_current_time={true}
            theme="theme-1"
          />
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center py-12 px-4 sm:px-3 lg:px-4">
          <h1>Recent Custom Requests</h1>
          <h1>Full</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-full items-center py-12 px-4 sm:px-6 lg:px-8">
        <h2>Upload More Flash</h2>
        <p>Reminder about file sizes here:</p>
        <button type='files'>Select Files</button>
      </div>
      <SchedulerEditor />
    </div>
  )
}

export default AdminLanding;
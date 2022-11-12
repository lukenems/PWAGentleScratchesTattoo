import SchedulerEditor from '../protected/SchedulerEditor';


const AdminLanding = () => {
  const today = new Date();
  return (
    <div className="bg-gradient-to-r from-green-500 via-transparent to-green-500 h-full">
      <div className="flex flex-col flex-between justify-around sm:flex-row pt-8">
        <div className="flex flex-col w-1/3 items-center py-2 px-2 sm:px-2 mx-3 bg-purple-900 border-2 rounded-l-lg border-white">
          <h1>Payouts Last 30 days</h1>
          <div className="px-3 bg-gray-500"></div>
        </div>
        <div className="flex flex-col w-1/3 items-center text-center py-2 px-2 sm:px-2 mx-3 bg-purple-900 border-2 rounded-2xl border-white">
          <h1>Upcoming Bookings</h1>
          <div className="h-auto min-w-full">
            <nylas-agenda
              header_type="full"
              allow_date_change={true}
              selected_date={today}
              condensed_view={true}
              id={import.meta.env.VITE_NYLAS_CALENDAR_ID}
              allowed_dates
              hide_current_time={true}
              theme="theme-1"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center text-center py-2 px-2 sm:px-2 mx-3 bg-purple-900 border-2 rounded-r-lg border-white">
          <h1>Recent Custom Requests</h1>
          <div className="px-3 bg-gray-500"></div>
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
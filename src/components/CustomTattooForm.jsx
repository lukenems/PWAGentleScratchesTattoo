import { useState } from 'preact/hooks';

const CustomTattooForm = () => {
  //don't really need context here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [insta, setInsta] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');

  const handleOnClick = (e) => {
    e.preventDefault;
  };

  return (
    <>
      <h1 className="mt-7">Custom Design Request</h1>
      <form className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col justify-self-center">
            <h3>Contact Info</h3>
            <input
              type="text"
              className="m-2 p-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="m-2 p-2"
              onChange={(e) => setInsta(e.target.value)}
              value={insta}
              required
              placeholder="@Instagram handle"
            />
            <input
              type="text"
              className="m-2 p-2"
              onChange={(e) => setApptDate(e.target.value)}
              value={apptDate}
              placeholder="Desired Appt Date Range (MM/DD-DD)"
            />
            <input
              type="text"
              className="m-2 p-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email (optional)"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3>Describe your design here:</h3>
            <textarea
              type="text"
              className="text-center m-2 p-2"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              rows="8"
            />
          </div>
          <div className="justify-self-center">
            <h3>Upload a similar design/inspo here:</h3>
            <input
              type="button"
              className="m-2 p-2"
              value="IMG upload button"
            />
          </div>
          <button onClick={handleOnClick} type="submit">
            Submit
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </>
  );
};

export default CustomTattooForm;

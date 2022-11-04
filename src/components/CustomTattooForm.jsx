import { useState } from 'preact/hooks';
import { useUploadImages } from '../hooks/useUploadImages';
import { useGetImageUrls } from '../hooks/useGetImageUrls';

const CustomTattooForm = () => {
  //don't really need context here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [insta, setInsta] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState('');
  const [images, setImages] = useState();
  // const [imageUrl, setImageUrl] = useState([]);


  const handleUpload = (e) => {
    e.preventDefault();
    const files = [...e.target.files];
    setImages(...files);
    console.log(images)
    setIsUploading(true);
    useUploadImages(files, name);
    setIsUploading(false);
    console.log(name, images)

  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let urls = useGetImageUrls(imageUpload, name);
    console.log('url inside upload --> ', urls);

    //  hook here for sending email

    //make another hook for putting all the state together and send to firebase
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
              className= "m-2 p-2"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              rows="8"
            />
          </div>
          <div className="justify-self-center">
            <h3>Upload a similar design/inspo here if you like!</h3>
            <h3>*Please limit to 3 images*</h3>
            <input
              type="file"
              className="m-2 p-2"
              onChange={handleUpload}
              multiple
            />
          </div>
          <button onClick={handleSubmit} type="submit" disabled={isUploading}>
            {!isUploading ? 'Submit' : 'Uploading Images...'}
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </>
  );
};

export default CustomTattooForm;

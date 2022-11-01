import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const useUploadImages = (files, name) => {
  // const [imagePath, setImagePath] = useState([]);
  const images = [...files]
  let urlArray = images.map( image => {
    // add L-T-L of 90 days?
    const imageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log('image uploaded');
    })
      return imageRef
  })
  console.log(urlArray)
  return urlArray;
}
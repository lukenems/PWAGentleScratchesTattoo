import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export const useUploadImages = (files, name) => {
  // const [imagePath, setImagePath] = useState([]);
  console.log('inside uploadImages ', files)
  files.forEach( image => {
    // add L-T-L of 90 days?

    // check image size
    // if (image.size > 1000000 ) {
    //   return 'One of your images is too large, please upload a smaller image'
    // }

    const storageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      console.log('image uploaded');
    })
  })
}
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export const useUploadImages = async (files, name) => {
  files.forEach( async image => {
    // add TTL of 90 days?
    // check image size
    // if (image.size > 1000000 ) {
    //   return 'One of your images is too large, please upload a smaller image'
    // }

    const storageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    await uploadBytes(storageRef, image)
      .then(() => {
      console.log('image uploaded');
      })
      .catch( error => console.log(error))
  })
}
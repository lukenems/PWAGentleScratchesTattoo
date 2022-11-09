import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export const useUploadImages = async (files, name) => {
  files.forEach( async image => {
    const storageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    await uploadBytes(storageRef, image)
      .then(() => {
      console.log('image uploaded');
      })
      .catch( error => console.log(error))
  })
}
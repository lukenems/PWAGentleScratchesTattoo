import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

const useUploadImages = async (files, name) => {
  files.forEach( async image => {
    if (name == 'Flash_Upload') {
      const storageRef = ref(storage,  `${name}/${image.name}`);
    } else {
      const storageRef = ref(storage, `${'Client_Images'}/${name}/${image.name}`)
    }
    
    await uploadBytes(storageRef, image)
      .then(() => {
      console.log('image uploaded');
      })
      .catch( error => console.log(error))
  })
}

export default useUploadImages;
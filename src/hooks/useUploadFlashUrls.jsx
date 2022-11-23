import { db } from '../firebase';
import { ref, update } from 'firebase/database';

const useUploadFlashUrls = async (urls) => {
  const dbRef = ref(db, 'Flash_Urls/')
  try {
    update(dbRef, urls)
      .then(() => {
        console.log('Uploaded successfully');
      })
  } catch (error) {
    console.log(error)
  }
}

export default useUploadFlashUrls;
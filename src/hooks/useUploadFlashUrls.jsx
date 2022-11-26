import { db } from '../firebase';
import { ref, update, child, push } from 'firebase/database';

const useUploadFlashUrls = async (urls) => {
  console.log(urls)
  // const dbRef = ref(db, 'Flash_Urls/')
  const newPostKey = push(child(ref(db), 'Flash_Urls')).key;
  const updates = {};
  updates['Flash_Urls/' + newPostKey] = urls;
  try {
    update(ref(db), updates)
      .then(() => {
        console.log('Uploaded successfully');
      })
  } catch (error) {
    console.log(error)
  }
}

export default useUploadFlashUrls;
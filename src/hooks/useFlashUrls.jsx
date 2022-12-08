import { db } from '../firebase';
import { ref, onValue } from "firebase/database";

const useFlashUrls = () => {
  let urlList = [];
  const dbRef = ref(db, 'Flash_Urls');
  onValue(dbRef, (snapshot) => {
    snapshot.forEach(folder => {
      folder.val().forEach(flashUrl => {
        urlList.push(flashUrl);
      });
    });
  });
  console.log(urlList)
  return urlList;
}

export default useFlashUrls;
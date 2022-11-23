import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

const useGetImageUrls = async (files, name) => {
  let urlArray = [];
  let storageRef;
  for (let i=0; i <files.length; i++) {
    if (name == 'Flash_Upload') {
      storageRef = ref(storage, `${name}/${files[i].name}`);
    } else {
      storageRef = ref(storage, `Client_Images/${name}/${files[i].name}`);
    }
    await getDownloadURL(storageRef)
      .then(url => urlArray.push(url) )
      .catch(error => console.log(error) )
  }
  return urlArray
}

export default useGetImageUrls;
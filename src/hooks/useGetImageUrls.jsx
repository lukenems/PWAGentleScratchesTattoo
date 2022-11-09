import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const useGetImageUrls = async ( files, name) => {
  let urlArray = [];

  for (let i=0; i <files.length; i++) {
    const storageRef = ref(storage, `Client_Images/${name}/${files[i].name}`);
    await getDownloadURL(storageRef)
      .then( url => urlArray.push(url) )
      .catch(error => console.log(error) )
  }
  return urlArray
}
import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const useGetImageUrls = (images, name) => {
  let imageUrls = files.map(image => {
    const storageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    getDownloadURL(storageRef)
      .then((url) => {
        return url
      })
  })
  console.log('image urls -->', imageUrls);
}
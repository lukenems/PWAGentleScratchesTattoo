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
  // ** Both forEach and map don't wait for API call to return
  // ** before returning itself; results in returning Promises
    // files.forEach( async image => {
    //   const storageRef = ref(storage, `Client_Images/${name}/${image.name}`);
    //   await getDownloadURL(storageRef)
    //     .then(url => {
    //       // const img = document.createElement('img');
    //       // img.setAttribute('src', url);
    //       console.log('inside', url)
    //       urlArray.push(url);
    //     })
    // })
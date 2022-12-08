import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const useCustomRequests = async () => {
  let reqList = [];
  let reqs;
  const dbRef = ref(db, 'customRequest');
  onValue(dbRef, (snapshot) => {
   reqs = snapshot.val()
  })
  for(let name in reqs){
    reqList.push(reqs[name]);
  }
  return reqList;
}

export default useCustomRequests;
import { db } from '../firebase';
import { ref, set } from 'firebase/database';

const useDbCustomForm = (name, email, desiredApptDate, insta, desc, urls) => {
  const dbRef = ref(db, 'customRequest/' + name)
  set(dbRef, {
    name,
    email,
    desiredApptDate,
    insta,
    desc,
    urls
  });
}

export default useDbCustomForm;
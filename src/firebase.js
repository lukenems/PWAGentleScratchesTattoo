import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyryjIggNNgdmZ_35nZDNAUr4NdZTeE2k",
  authDomain: "pwa-gentlescratches.firebaseapp.com",
  databaseURL: "https://pwa-gentlescratches-default-rtdb.firebaseio.com",
  projectId: "pwa-gentlescratches",
  storageBucket: "pwa-gentlescratches.appspot.com",
  messagingSenderId: "461732908944",
  appId: "1:461732908944:web:6f690c07eb21827a0aed15",
  measurementId: "G-7GH4BQTGV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAyryjIggNNgdmZ_35nZDNAUr4NdZTeE2k",
  authDomain: "pwa-gentlescratches.firebaseapp.com",
  projectId: "pwa-gentlescratches",
  storageBucket: "pwa-gentlescratches.appspot.com",
  messagingSenderId: "461732908944",
  appId: "1:461732908944:web:6f690c07eb21827a0aed15",
  measurementId: "G-7GH4BQTGV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
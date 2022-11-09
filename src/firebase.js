import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.PREACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.PREACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.PREACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.PREACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PREACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.PREACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBjZG4YXds3_sQ_2vwzmdj-9yQjWJbYZ2Y",
  authDomain: "tiktok-jornada-63de3.firebaseapp.com",
  projectId: "tiktok-jornada-63de3",
  storageBucket: "tiktok-jornada-63de3.appspot.com",
  messagingSenderId: "939654288463",
  appId: "1:939654288463:web:2b9abe496b05dfcfcc863a"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
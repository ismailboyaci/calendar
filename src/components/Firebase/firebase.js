import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDxRizjkbquXFrxdERCJCkkRcwuLjtwGnU",
    authDomain: "calendarapp-4ce16.firebaseapp.com",
    projectId: "calendarapp-4ce16",
    storageBucket: "calendarapp-4ce16.appspot.com",
    messagingSenderId: "817508414065",
    appId: "1:817508414065:web:97b9f0dd6b1defc4f721d0"
  };





  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const datab= getDatabase(app);
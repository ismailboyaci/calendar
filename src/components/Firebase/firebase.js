import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA5h4GcbkmstrHc-olyVE_5idLRUvhrKOo",
    authDomain: "calendarapp1-3769b.firebaseapp.com",
    projectId: "calendarapp1-3769b",
    storageBucket: "calendarapp1-3769b.appspot.com",
    messagingSenderId: "254837473294",
    appId: "1:254837473294:web:78469b09356908afe03c5f",
    measurementId: "G-7GSS6GH2TB"
  };





  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const datab= getDatabase(app);

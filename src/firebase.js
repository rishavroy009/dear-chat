
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyB-inyNldhZCxqnYW7Wg8oqx1gBMLZQSO4",
    authDomain: "dearchat-8ad72.firebaseapp.com",
    projectId: "dearchat-8ad72",
    storageBucket: "dearchat-8ad72.appspot.com",
    messagingSenderId: "747793463269",
    appId: "1:747793463269:web:bd945ba3596edea36b210c"
  };

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();
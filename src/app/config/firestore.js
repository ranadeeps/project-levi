// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6wCSGIGADX7byCrjmJZIx51w2xcuxBY",
  authDomain: "messagesdb-ebc9c.firebaseapp.com",
  projectId: "messagesdb-ebc9c",
  storageBucket: "messagesdb-ebc9c.appspot.com",
  messagingSenderId: "1022902709358",
  appId: "1:1022902709358:web:9de4739827c26c96794a7f",
  measurementId: "G-B2J6L95S3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const db = getFirestore(app);
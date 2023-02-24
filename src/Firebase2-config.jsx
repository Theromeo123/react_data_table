// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxsbxS6MxKj72E2_10Opd95mN1nKjxVt8",
  authDomain: "leaveapp-1fa5b.firebaseapp.com",
  projectId: "leaveapp-1fa5b",
  storageBucket: "leaveapp-1fa5b.appspot.com",
  messagingSenderId: "933629935322",
  appId: "1:933629935322:web:32b75301935aaa7cdc2fe3",
  measurementId: "G-D66RFYY9XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
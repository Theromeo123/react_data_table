// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_NFT4qj-7iqLYbQp2KTXAX-rM5xL4oAQ",
  authDomain: "product-firebase-8bd98.firebaseapp.com",
  projectId: "product-firebase-8bd98",
  storageBucket: "product-firebase-8bd98.appspot.com",
  messagingSenderId: "537196232776",
  appId: "1:537196232776:web:8a87250be91d39fc3e587d",
  measurementId: "G-C45SLSYSXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
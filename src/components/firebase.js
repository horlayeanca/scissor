import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtyx3aLABTBh1UmapHIEeCGOaYJ6R-f1o",
  authDomain: "scissor-af7b6.firebaseapp.com",
  projectId: "scissor-af7b6",
  storageBucket: "scissor-af7b6.appspot.com",
  messagingSenderId: "376148287553",
  appId: "1:376148287553:web:266bceb26c6367c1c8e6c0",
  measurementId: "G-G0QM8WKZ98",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

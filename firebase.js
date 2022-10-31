// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore" 
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD70yuxUfMKqjMVT9FRj1wgXVHmDGM2zlk",
  authDomain: "easytripdatabase.firebaseapp.com",
  projectId: "easytripdatabase",
  storageBucket: "easytripdatabase.appspot.com",
  messagingSenderId: "382145630972",
  appId: "1:382145630972:web:b8cf8b109a980ceb423d79",
  measurementId: "G-SNVGQEM6C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, query, where } from "firebase/firestore";



const firebaseConfig = {
  apikey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, query, where };
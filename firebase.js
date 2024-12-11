import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apikey: "AIzaSyDPQ-nQEHAYJ1DXXVPplaQX8NFOYHwmFhQ",
  authDomain: "-narino-hackaton.ficonectarebaseapp.com",
  projectId: "conecta-narino-hackaton",
  storageBucket: "conecta-narino-hackaton.firebasestorage.app",
  messagingSenderId: "806134365221",
  appId: "1:806134365221:web:78fa6f8a923787a3afd3cc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export { db, app };
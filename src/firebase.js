import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxJD5w5m9jC_vP4sIBeo4x27uv1tSTAao",
  authDomain: "harini-2a27d.firebaseapp.com",
  projectId: "harini-2a27d",
  storageBucket: "harini-2a27d.appspot.com",
  messagingSenderId: "116240791532",
  appId: "1:116240791532:web:dae516b351b91a9eb0b2c9"
};
  
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);
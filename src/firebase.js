import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjTH4hp5TvuodNu6RkzO9ckooW1ZErGSA",
    authDomain: "app-restaurante-ae54f.firebaseapp.com",
    projectId: "app-restaurante-ae54f",
    storageBucket: "app-restaurante-ae54f.appspot.com",
    messagingSenderId: "623628701440",
    appId: "1:623628701440:web:59454ec0eae889c0302de5"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
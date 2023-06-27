import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3pCDDblChVY063HPTOazwJOQ1mWCV4Jk",
  authDomain: "facit-d1265.firebaseapp.com",
  databaseURL: "https://facit-d1265-default-rtdb.firebaseio.com",
  projectId: "facit-d1265",
  storageBucket: "facit-d1265.appspot.com",
  messagingSenderId: "339797683610",
  appId: "1:339797683610:web:c6c3c8b5c26657df469e23"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);
const urlApi = "https://facit-d1265-default-rtdb.firebaseio.com/json";

export { app, fireDb, urlApi };


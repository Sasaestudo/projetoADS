
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3pCDDblChVY063HPTOazwJOQ1mWCV4Jk",
  authDomain: "facit-d1265.firebaseapp.com",
  databaseURL: "https://facit-d1265-default-rtdb.firebaseio.com",
  projectId: "facit-d1265",
  storageBucket: "facit-d1265.appspot.com",
  messagingSenderId: "339797683610",
  appId: "1:339797683610:web:c6c3c8b5c26657df469e23"
};

  // inicializa Firebase
  const app = initializeApp(firebaseConfig);
  const urlApi = 'https://facit-d1265-default-rtdb.firebaseio.com/'

  export { app, urlApi }
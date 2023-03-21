// Import initializeApp and getDatabase functions

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7khADx-NVdnlHdAfPSolZJJ1hZ3eeD3Y",
  authDomain: "jobi-122d7.firebaseapp.com",
  databaseURL: "https://jobi-122d7-default-rtdb.firebaseio.com",
  projectId: "jobi-122d7",
  storageBucket: "jobi-122d7.appspot.com",
  messagingSenderId: "6623742296",
  appId: "1:6623742296:web:89d421e57644fc845d7d2d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);

export { firebase, db };

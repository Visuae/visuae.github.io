// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxoWUOAUDoJgBBzWcHnraqtAle6kxLBr0",
  authDomain: "visuae-backend.firebaseapp.com",
  databaseURL: "https://visuae-backend-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "visuae-backend",
  storageBucket: "visuae-backend.firebasestorage.app",
  messagingSenderId: "95539673418",
  appId: "1:95539673418:web:b7dcbc058fe8f1450729b3",
  measurementId: "G-571JRX9GBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
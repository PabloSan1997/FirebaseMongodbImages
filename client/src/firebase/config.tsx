// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC_InBjqrPupwBi4EKazGzJxWGWygNYes",
  authDomain: "ejemploimagenes-f0ee3.firebaseapp.com",
  projectId: "ejemploimagenes-f0ee3",
  storageBucket: "ejemploimagenes-f0ee3.appspot.com",
  messagingSenderId: "856988013566",
  appId: "1:856988013566:web:a732f5aece73259e4be6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


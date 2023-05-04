// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClY507kvoH5xnvSLCqugu8Eej_m6C9TD8",
  authDomain: "chef-recipe-hunter-52c83.firebaseapp.com",
  projectId: "chef-recipe-hunter-52c83",
  storageBucket: "chef-recipe-hunter-52c83.appspot.com",
  messagingSenderId: "77475561772",
  appId: "1:77475561772:web:688d181dbc846ebcdaec89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
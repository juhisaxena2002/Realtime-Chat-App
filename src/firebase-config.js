// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCez7f_PIfmzpHwlNxcvoxrn8HaBajLKEw",
//   authDomain: "chatapp-1001d.firebaseapp.com",
//   projectId: "chatapp-1001d",
//   storageBucket: "chatapp-1001d.appspot.com",
//   messagingSenderId: "465236075013",
//   appId: "1:465236075013:web:fbe52b92ec272ea6dd326c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBw8kPQkxNvVY2cB6ghVc20FlxhP4e_Xs4",
  authDomain: "testproj-531d7.firebaseapp.com",
  projectId: "testproj-531d7",
  storageBucket: "testproj-531d7.appspot.com",
  messagingSenderId: "705585244276",
  appId: "1:705585244276:web:6905459d1c0800f7ba0921",
  measurementId: "G-KWJSWQRNV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
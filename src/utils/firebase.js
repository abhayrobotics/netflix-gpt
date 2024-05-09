// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2KvndpcBTG0uA4hsNkcettj5zir7ZX_M",
  authDomain: "netflix-gpt-d69df.firebaseapp.com",
  projectId: "netflix-gpt-d69df",
  storageBucket: "netflix-gpt-d69df.appspot.com",
  messagingSenderId: "893714070185",
  appId: "1:893714070185:web:79d0c82ab2ed0288a687b8",
  measurementId: "G-L032L80TKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// custom code by me
// since it will be used every tie we use any authentication of firebase , we will call in our central firebase file
export const auth = getAuth();
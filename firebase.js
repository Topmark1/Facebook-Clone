
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWXuD0qXPNijlKcnrn_kE3q5z3mlL236M",
  authDomain: "fakebuok-9be3f.firebaseapp.com",
  projectId: "fakebuok-9be3f",
  storageBucket: "fakebuok-9be3f.appspot.com",
  messagingSenderId: "160157159593",
  appId: "1:160157159593:web:fa3d6d7af4ae8307fa19b8"
};

// Initialize Firebase
const app =!getApps().length?initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}
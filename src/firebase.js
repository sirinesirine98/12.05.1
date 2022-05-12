import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'firebase/compat/auth';
import { getFirestore } from "firebase/compat/firestore";
import firebase from 'firebase/compat/app'
const firebaseConfig = {
  apiKey: "AIzaSyBPfau-xVGVjirrJ5NVdiyysOV7QvMQuMs",
  authDomain: "reactwebapp-83db0.firebaseapp.com",
  projectId: "reactwebapp-83db0",
  storageBucket: "reactwebapp-83db0.appspot.com",
  messagingSenderId: "235624041592",
  appId: "1:235624041592:web:4493fa04b43381da27718d",
  measurementId: "G-8HMJ7R97CE"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};




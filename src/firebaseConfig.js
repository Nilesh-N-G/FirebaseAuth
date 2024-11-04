import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcA2zFd5HD4HmP9vU9EdUs8OLSFTYU7BA",
  authDomain: "signindemo-38d39.firebaseapp.com",
  projectId: "signindemo-38d39",
  storageBucket: "signindemo-38d39.appspot.com", 
  messagingSenderId: "266636154517",
  appId: "1:266636154517:web:80adaebd5c900a1a012d9c",
  measurementId: "G-NQ89V4B5R9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {

      console.log("User signed in:", result.user);
      return result.user;
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
      throw error;
    });
};

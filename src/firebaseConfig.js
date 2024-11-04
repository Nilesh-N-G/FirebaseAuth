import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
//Your Config
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

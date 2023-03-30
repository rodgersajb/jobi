import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase, db } from "./firebase";
import { set, ref } from "firebase/database";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth(firebase);

export const googleSignUp = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result)
      const user = result.user;

      set(ref(db, "users/" + user.uid), {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const facebookSignUp = () => {
   signInWithPopup(auth, facebookProvider).then((result) => {
    console.log(result)
     const user = result.user;

     set(ref(db, "users/" + user.uid), {
       email: result.user.email,
       name: result.user.displayName,
       photo: result.user.photoURL,
     });
   }).catch((error) => {
    console.log(error)
   })
}


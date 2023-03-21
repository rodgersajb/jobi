import { getAuth } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import { firebase } from "../Components/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

// Auth Provider to be wrapped around entire app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebase);
    // variable that will track whether there has been changed to the signed in user
    auth.onAuthStateChanged(setCurrentUser);
  }, []);


  // in the return, provide the authcontext.provider with the value of currentUser, setCurrentUser so the current users data can be passed to the rest of the APP 👇👇👇
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

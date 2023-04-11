import { useState } from "react";
import { Link, Navigate } from "react-router-dom";


import googleLogIn from "../assets/google-login.jpg";
import fbLogin from "../assets/fb-login.jpg";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebase, db } from "./firebase";

import { ModalContext } from "../Contexts/ModalContext";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const LoginModal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const googleSignIn = () => {
    const auth = getAuth(firebase);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const facebookSignIn = () => {
    const auth = getAuth(firebase);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        console.log(result, "FACEBOOK RESULT");
        const user = result.user;
        setCurrentUser(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const handleSignIn = (event) => {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        setCurrentUser(user);
        
        alert("successfully signed in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const authenticateUser = () => {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        
        setLoggedIn(true);
        const uid = currentUser.uid;
      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    if (!loggedIn) {
      authenticateUser();
    }
  }, [loggedIn]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", showModal);
  }, [showModal]);

  return (
    <>
      <div
        className="modal"
        style={{ display: showModal ? "block" : "none" }}
        onClick={closeModal}
      >
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <h2>Hi, Welcome Back!</h2>
          <h5>
            Still don't have an account?{" "}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </h5>
          <form action="" onSubmit={handleOnSubmit}>
            <span className="inputs">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </span>
            <span className="inputs">
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </span>
            <span className="inputs">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </span>
            <button className="login-btn" onClick={handleSignIn}>
              Login
            </button>
            <span>OR</span>
            <div className="flex-container">
              <div className="sign-in-buttons">
                <button onClick={googleSignIn}>
                  <img
                    src={googleLogIn}
                    alt="google log in button"
                  />
                </button>
                <button onClick={fbLogin}>
                  <img
                    src="src/assets/fb-log.jpg"
                    alt="facebook log in button"
                  />
                </button>
              </div>
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
              <button className="close-modal" onClick={closeModal}>
                x
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

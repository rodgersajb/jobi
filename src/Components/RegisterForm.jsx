import { firebase, db } from "./firebase";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { googleSignUp, facebookSignUp } from "./SignUps";
import { ModalContext } from "../Contexts/ModalContext";
import LoginModal from "./LoginModal";

import { useState, useContext } from "react";

const RegisterForm = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

   const handleClick = () => {
     setShowModal(true);
   };

  const handleSignUp = () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        
        alert("Successfully signed up!");
        set(ref(db, "users/" + user.uid), {
          email: email,
          displayName: name,
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="register-form">
        <div className="form-container">
          <h2>Create Account</h2>
          <div className="button-select">
            <button>Candidates</button>
            <button>Employer</button>
          </div>
          <form
            className="sign-in-form"
            onSubmit={handleOnSubmit}
            action="
                "
          >
            <span>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </span>
            <span>
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </span>
            <span>
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </span>
            <button onClick={handleSignUp}>REGISTER</button>
            <span>OR</span>
            <div className="flex-container">
              <div className="sign-in-buttons">
                <button onClick={googleSignUp}>
                  <img
                    src="src/assets/g-login.jpg"
                    alt="google log in button"
                  />
                </button>
                <button onClick={facebookSignUp}>
                  <img
                    src="src/assets/fb-log.jpg"
                    alt="facebook log in button"
                  />
                </button>
              </div>
            </div>
          </form>
          <p>
            Have an account? <span className="underline" onClick={handleClick}>Sign In</span>
          </p>
        </div>
      </section>
      <LoginModal/>
    </>
  );
};

export default RegisterForm;

import { firebase, db } from "./firebase";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { googleSignUp, facebookSignUp } from "./GoogleSignUp";

import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
            <div className="sign-in-buttons">
              <button onClick={googleSignUp}>Sign In With Google</button>
              <button onClick={facebookSignUp}>Sign In With Facebok</button>
            </div>
          </form>
          <p>
            Have an account? <span className="underline">Sign In</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;

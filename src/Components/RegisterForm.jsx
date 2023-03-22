import { firebase, db } from "./firebase";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { googleSignUp, facebookSignUp } from "./SignUps";

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
            <div className="sign-in-buttons">
              <button onClick={googleSignUp}>
                <img
                  src="src/assets/btn_google_signin_light_pressed_web.png"
                  alt="google sign in button"
                />
              </button>
              <button onClick={facebookSignUp}>
                <div
                  className="fb-login-button"
                  data-width="291px"
                  data-size=""
                  data-button-type=""
                  data-layout=""
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div>
              </button>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Homepage/Nav";
import { googleSignUp, facebookSignUp } from "./SignUps";
import { ModalContext } from "../Contexts/ModalContext";
import { useContext, useEffect } from "react";

const LoginModal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const closeModal = () => {
    setShowModal(false);
  };

   useEffect(() => {
     document.body.classList.toggle("modal-open", showModal);
   }, [showModal]);

  return (
    <>
      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <div className="content">
          <h2>Hi, Welcome Back!</h2>
          <h5>
            Still don't have an account?{" "}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </h5>
          <form action="">
            <span className="inputs">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </span>
            <span className="inputs">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </span>
            <button className="login-btn">Login</button>
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
                <p>
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>
                <button onClick={closeModal}>close Modal</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

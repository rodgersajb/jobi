import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import error from '../assets/404.jpg';

import { ModalProvider } from "../Contexts/ModalContext";
import LoginModal from "./LoginModal";


const ErrorPage = () => {
    
    

  return (
    <>
      <ModalProvider>
        <Navbar />
        <LoginModal />
        <section className="error-page">
          <div className="flex-container">
            <image className="image-container">
              <img src={error} alt="404 error message" />
            </image>
            <div className="content">
              <h2 className="error">404</h2>
              <h2>Page Not Found</h2>
              <p>
                Publishing industries for previewing layouts & visual mockups
                used.
              </p>

              <Link to={"/"}>
                <p>Go Back</p>
                <img
                  src="src/assets/404-arrow.jpg"
                  alt="black arrow point to the right indicating to go back to home page"
                />
              </Link>
            </div>
          </div>
        </section>
      </ModalProvider>
    </>
  );
};

export default ErrorPage;

import Footer from "./Footer";
import RegisterForm from "./RegisterForm";
import Navbar from "./Navbar";
import { ModalContext, ModalProvider } from "../Contexts/ModalContext";
import Hamburger from "./Hamburger";

const Register = () => {
  return (
    <>
      <ModalProvider>
        <div className="pages">
          <Hamburger />
          <Navbar />

          <div className="content-container">
            <h2>Register</h2>
            <h5>Create an account & Start posting or hiring talents</h5>
            <img src="src/assets/box-reg.jpg" alt="" />
          </div>
          <RegisterForm />
        </div>
        <Footer />
      </ModalProvider>
    </>
  );
};
export default Register;

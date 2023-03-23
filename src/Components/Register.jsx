import Footer from "./Footer";
import RegisterForm from "./RegisterForm";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <>
      <div className="pages">
        <Navbar />

        <div className="content-container">
          <h2>Register</h2>
          <h5>Create an account & Start posting or hiring talents</h5>
          <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
};
export default Register;

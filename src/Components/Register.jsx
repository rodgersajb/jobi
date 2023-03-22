import Footer from "./Footer";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <nav>
          <div className="flex-container">
            <img src="src/assets/jobiLogoDark.png" alt="jobi logo" />
            <ul>
              <li>Category</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Job</li>
              <li>Explore</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
            <img src="src/assets/register-squiggle.jpg" alt="a swirly design" />
            <div className="buttons">
              <button>Post Job</button>
              <button>Login</button>
              <button>Hire Top Talents</button>
            </div>
          </div>
        </nav>
        <div className="content-container">
          <h2>Register</h2>
          <h5>Create an account & Start posting or hiring talents</h5>
          <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <RegisterForm />
        <Footer />
      </div>
    </>
  );
};
export default Register;

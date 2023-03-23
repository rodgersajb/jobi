import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import { ModalContext } from "../../Contexts/ModalContext";
import { useContext } from "react";

const Nav = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <nav className={showModal ? "modal-open" : null}>
        <img src="public/assets/assets/jobiLogo.png" alt="jobi logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>Explore</li>
          <li>Category</li>
          <li>Pages</li>
        </ul>
        <div className="login-buttons">
          <button
            center
            styles={{ background: "#FFFF00" }}
            onClick={handleClick}
          >
            Login
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;

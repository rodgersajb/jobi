import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jobiLogoDark from "../assets/jobiLogoDark.png";
import registerSquiggle from "../assets/register-squiggle.jpg";

library.add(faUser, faRightFromBracket);

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const signOut = () => {
    setCurrentUser(null);
  };

  console.log(currentUser);
  return (
    <>
      <nav className="pages">
        <div className="flex-container pages">
          <img src={jobiLogoDark} alt="jobi logo" />
          <ul className="pages">
            <li>Category</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="dropdown">
              <li>
                <Link to="/jobs">Jobs</Link>
                <div className="triangle"></div>
                <div className="dropdown-menu">Drop Content</div>
              </li>
            </div>
            <li>Explore</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
          <img src={registerSquiggle} alt="a swirly design" />
          <div className="buttons pages">
            <button>Post Job</button>
            {currentUser ? (
              <>
                <div className="dropdown">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      <p className="current-user">
                        {currentUser.displayName || currentUser.email}
                      </p>
                      <button className="sign-out" onClick={signOut}>
                        Logout
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <button>Login</button>
            )}
            <button>Hire Top Talents</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

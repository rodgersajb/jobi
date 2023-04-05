import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faAddressBook,
  faAddressCard,
  faSuitcase,
  faUser,
  faRightFromBracket,
  faFile,
  faCaretDown,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faHome, faAddressBook, faAddressCard, faSuitcase, faUser, faRightFromBracket, faFile, faCaretDown, faUserPlus);

const Hamburger = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        className="hamburger-checkbox"
        id="hamburger-checkbox"
        checked={menuOpen}
        onChange={handleMenuToggle}
      />
      <label htmlFor="hamburger-checkbox" className="hamburger-label">
        <span className="hamburger-icon"></span>
      </label>
      <div className="hamburger-content">
        <ul>
          {currentUser ? (
            <li>
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <p>{currentUser.displayName || currentUser.email}</p>
            </li>
          ) : (
            <li>
              <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
              <p>Login</p>
            </li>
          )}

          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-address-card" />

            <p>About</p>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-address-book" />

            <p>Contact</p>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-suitcase" />
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-file" />
            <p>Pages</p>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-user-plus" />
            <Link to="/register">Register</Link>
          </li>
          {currentUser ? (
            <li>
              <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
              <p>Logout</p>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;

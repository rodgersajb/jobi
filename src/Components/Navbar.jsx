import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="pages">
        <div className="flex-container pages">
          <img src="src/assets/jobiLogoDark.png" alt="jobi logo" />
          <ul className="pages">
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
          <div className="buttons pages">
            <button>Post Job</button>
            <button>Login</button>
            <button>Hire Top Talents</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

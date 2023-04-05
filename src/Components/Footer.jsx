import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";

import jobiLogo from "../assets/jobiLogo.png";
import jobiLogoDark from "../assets/jobiLogoDark.png";
import registerSquiggle from "../assets/register-squiggle.jpg";
import box from "../assets/box.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add();

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-container">
          <div className="content">
            <img src={jobiLogo} alt="jobi logo" />
            <p>jobisupport@company.com</p>
            <div className="socials">
              {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            </div>
            <img src={box} alt="styling box" />
          </div>

          <ul>
            <li>Links</li>
            <li>Pricing</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Products</li>
            <li>Take the tour</li>
            <li>Live chat</li>
            <li>Self-service</li>
            <li>Mobile</li>
            <li>Collaboration</li>
            <li>Reviews</li>
          </ul>
          <ul>
            <li>Legal</li>
            <li>Terms of use</li>
            <li>Terms & conditions</li>
            <li>Privacy</li>
            <li>Cookie policy</li>
          </ul>
          <ul>
            <li>Newsletter</li>
            <li>Join & get import news regularly</li>

            <div className="enter-mail">
              <input type="text" placeholder="Enter your email" />
              <button>Send</button>
            </div>

            <p>We only send interesting and relevant emails.</p>
          </ul>
        </div>
        <div className="footer">
          <div className="content">
            <p>Privacy & Terms.</p>
            <p>Contact Us</p>
          </div>
          <p>Copyright @2022 jobi inc.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

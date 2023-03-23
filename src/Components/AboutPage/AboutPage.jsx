import Navbar from "../Navbar";
import Footer from "../Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronRight);

const About = () => {
  return (
    <>
      <div className="about">
        <Navbar />
        <div className="content-container">
          <h2>About us</h2>
          <h5>
            Home
            <span>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </span>
            About
          </h5>
          <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

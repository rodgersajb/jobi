import Navbar from "../Navbar";
import Footer from "../Footer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
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
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    </>
  );
};

export default About;

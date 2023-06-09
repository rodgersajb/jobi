import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronUp, faChevronDown);

import squiggly from "../../../src/assets/line-design.jpg";
import smallGirl from "../../../src/assets/girl-small.jpg";
import mediumGirl from "../../../src/assets/girl-medium.jpg";
import largeGuy from "../../../src/assets/guy-large.jpg";

const FindTalent = () => {
  return (
    <>
      <section className="find-talent">
        <div className="flex-container">
          <div className="image-container">
            <img src={squiggly} alt="two squiggly line design" />
            <img src={smallGirl} alt="A female employee smiling at her desk" />
            <img
              src={mediumGirl}
              alt="A female with glasses smiling and shaking hands with another person"
            />
            <img
              src={largeGuy}
              alt="A male employee looking down at his work"
            />
          </div>
          <div className="content">
            <p>Looking for an expert?</p>
            <h3>Find top talent from jobi.</h3>
            <div className="flex-container">
              <h5>Seamless Search</h5>
              <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
            </div>
            <p>
              It only takes 5-minutes. Set-up is smooth and simple, with fully
              customisable page design to reflect your brand.
            </p>
            <div className="flex-container">
              <h5>Hire top talents</h5>
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <button>Find Talents</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindTalent;

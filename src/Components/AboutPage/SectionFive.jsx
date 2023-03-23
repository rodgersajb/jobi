import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowRight, faArrowLeft);

const SectionFive = () => {
  return (
    <>
      <section className="five">
        <div className="flex-container">
          <h2>Trusted by leading startups.</h2>
          <div className="arrows">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <span></span>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
          <img src="src/ass" alt="" />
        </div>
        <div className="flex-container">
          <div className="card">
            <img src="src/assets/monday-lime.jpg" alt="monday.com logo" />
            <h4>
              "Seattle opera simplifies Performance planning with deski
              eSignature"
            </h4>
            <p>
              <b>Rashad kabir,</b>Lead Designer
            </p>
            <div className="flex-container">
              <h5>4 Excellent</h5>
              <img src="src/assets/4star-g.jpg" alt="4 stars" />
            </div>
          </div>
          <div className="card">
            <img src="src/assets/shipbob-w.jpg" alt="shipbob logo" />
            <h4>"How DocuSign CLM helps Celonis scale its global business"</h4>
            <p>
              <b>Mark Joge,</b> Marketing Chief
            </p>
            <div className="flex-container">
              <h5>4.8 Awesome</h5>
              <img src="src/assets/5star-w.jpg" alt="5 stars" />
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="src/assets/google-w.jpg" alt="google logo" />
          <img src="src/assets/shipbob-gw.jpg" alt="shipbob logo" />
          <img src="src/assets/dribble-w.jpg" alt="dribble logo" />
          <img src="src/assets/slack-w.jpg" alt="slack logo" />
          <img src="src/assets/vine-w.jpg" alt="vine logo" />
          <img src="src/assets/airbnb-w.jpg" alt="airbnb logo" />
        </div>
        <div className="flex-container"></div>
      </section>
    </>
  );
};

export default SectionFive;

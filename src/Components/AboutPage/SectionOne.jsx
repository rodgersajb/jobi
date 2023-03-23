import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlus);

const SectionOne = () => {
  return (
    <section className="one">
      <div className="flex-container">
        <div className="content">
          <h2>We've been helping customers globally.</h2>
        </div>
        <div className="content">
          <div className="flex-container">
            <h5>Who we are?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>What's our goal?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>Our vision</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

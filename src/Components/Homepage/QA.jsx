import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlus);

const QA = () => {
  return (
    <>
      <section className="questions-answers">
        <h3>Questions & Answers</h3>
        <div className="content">
          
          <div className="flex-container">
            <h5>How does the free trial work?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>How do you find the different criteria in your process?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>What do you look for in a founding team?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>Do you recommend Pay as you go or Pre pay?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
          <div className="flex-container">
            <h5>What do I get for $0 with my plan?</h5>
            <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
          </div>
        </div>
        <p>
          Didn't find the answer? We can help.{" "}
          <span className="underline">Click here</span>
        </p>
      </section>
    </>
  );
};

export default QA;

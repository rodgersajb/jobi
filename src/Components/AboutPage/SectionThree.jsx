import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheck);

const SectionThree = () => {
  return (
    <>
      <section className="three">
        <div className="flex-container">
          <div className="content">
            <img
              src="src/assets/desgin.jpg"
              alt="profile pictures of employees and candidates"
            />
          </div>
          <div className="content">
            <p>Why Choose Us</p>
            <h2>Get over 50,000+ talented experts in jobi.</h2>
            <p>
              A full hybrid workforce management tools are yours to use, as well
              access to our top 1% of talent.
            </p>
            <h5>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-check" />
              </span>
              Seamless searching
            </h5>
            <h5>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-check" />
              </span>
              Get top 3% experts for your project
            </h5>
            <h5>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-check" />
              </span>
              Protected payments systems
            </h5>
            <button>Post a Job</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionThree;

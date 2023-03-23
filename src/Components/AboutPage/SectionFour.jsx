import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faNoteSticky, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUser, faNoteSticky, faPen);

const SectionFour = () => {
  return (
    <>
      <section className="four">
        <div className="image-container">

        <img src="src/assets/register-squiggle.jpg" alt="" />
        <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <div className="wrapper">
          <h2>How's it work?
            <img src="src/assets/3-squig.jpg" alt="" />
          </h2>
          <div className="flex-container">
            <div className="content">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <h5>Create Account</h5>
              <p>It's very easy to open an account and start your journey</p>
            </div>
            <div className="content">
              <img src="src/assets/dotted-arrow.jpg" alt="" />
            </div>
            <div className="content">
              <FontAwesomeIcon icon="fa-solid fa-note-sticky" />
              <h5>Complete your profile</h5>
              <p>
                Complete your profile with all the info to get attention of the
                client
              </p>
            </div>
            <div className="content">
              <img src="src/assets/dotted-arrow.jpg" alt="" />
            </div>
            <div className="content">
              <FontAwesomeIcon icon="fa-solid fa-pen" />
              <h5>Apply to job or hire</h5>
              <p>
                Apply & get your preferable jobs with all the requirements and
                get it
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionFour;

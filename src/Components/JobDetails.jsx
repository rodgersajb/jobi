import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hamburger from "./Hamburger";

import { ModalProvider } from "../Contexts/ModalContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faCircle,
  faDollarSign,
  faLocationDot,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheck, faCircle, faDollarSign, faLocationDot, faSuitcase);

const JobDetails = (props) => {
  const { jobPosting } = props;
  

  const { id } = useParams();

  const location = useLocation();
  

  const locationArray = Object.values(location);
  
  const job = locationArray[3];

  return (
    <>
      <ModalProvider>
        <Navbar />
        <Hamburger />
        <section className="job">
          <div className="content-container">
            <h5>
              <span>{job?.datePosted} by</span> {job?.logo}
            </h5>
            <h2>{job?.job}</h2>
          </div>
          <div className="job-details">
            <div className="container">
              <div className="content-card">
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                <p>Salary</p>
                <p>{job.salary} per year</p>
              </div>
              <div className="content-card">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <p>Location</p>
                <p>{job.location}</p>
              </div>
              <div className="content-card">
                <FontAwesomeIcon icon="fa-solid fa-suitcase" />
                <p>Job Type</p>
                <p>{job.work}</p>
              </div>
            </div>
            <div className="flex-column">
              <div className="content">
                <h4>Job Description</h4>
                <p>{job?.jobDescription}</p>
              </div>
              <div className="content">
                <h4>Responsibilities</h4>
                <ul>
                  {Array.isArray(job.keyResponsibilities) ? (
                    job.keyResponsibilities.map((responsibility) => {
                      return (
                        <div className="flex-container">
                          <FontAwesomeIcon icon="fa-solid fa-check" />
                          <li>{responsibility}</li>;
                        </div>
                      );
                    })
                  ) : (
                    <p>{job.keyResponsibilities}</p>
                  )}
                </ul>

                <p></p>
              </div>
              <div className="content">
                <h4>Required Skills</h4>
                <ul>
                  {Array.isArray(job.requiredSkill) ? (
                    job.requiredSkill.map((skill) => {
                      return (
                        <div className="flex-container">
                          <FontAwesomeIcon icon="fa-solid fa-circle" />
                          <li>{skill}</li>
                        </div>
                      );
                    })
                  ) : (
                    <p>{job.requiredSkill}</p>
                  )}
                </ul>
              </div>
              <div className="content">
                <h4>Benefits</h4>
                <p>{job?.benefits}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </ModalProvider>
    </>
  );
};

export default JobDetails;

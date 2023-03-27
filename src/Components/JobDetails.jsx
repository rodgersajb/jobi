import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const JobDetails = (props) => {
  const { jobPosting } = props;
  console.log(jobPosting, "job posting");

  const { id } = useParams();

  const location = useLocation();
  console.log(location, "location");

  const locationArray = Object.values(location);
  console.log(locationArray, "location array");
  const job = locationArray[3];

  return (
    <>
      <Navbar />
      <div className="content-container">
        <h5>
          <span>{job?.datePosted} by</span> {job?.logo}
        </h5>
        <h2>{job?.job}</h2>
      </div>
      <div className="job-details">
        <div className="flex-column">
          <div className="content">
            <h4>Job Description</h4>
            <p>{job.jobDescription}</p>
          </div>
          <div className="content">
            <h4>Responsibilities</h4>
            <ul>
              {job.keyResponsibilities.map((responsibility) => {
                return <li>{responsibility}</li>;
              })}
            </ul>

            <p></p>
          </div>
          <div className="content">
            <h4>Required Skills</h4>
            <ul>
              {job.requiredSkill.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="content">
            <h4>Benefits</h4>
            <p>{job.benefits}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JobDetails;

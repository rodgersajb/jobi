import { useEffect, useState, useContext } from "react";
import { ref, onValue, push } from "firebase/database";
import { db } from "../firebase";
import { uuidv4 } from "@firebase/util";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import SavedJobs from "../SavedJobs";

import { library } from "@fortawesome/fontawesome-svg-core";
import {faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBookmark);

const JobCard = (props) => {
  const { jobPosting, index } = props;

  // console.log(props )

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  // generate a random id to attach to each posting
  const jobId = uuidv4();

  const [jobs, setJobs] = useState([]);

  // variable that will check if the currentUser has a uid, else null
  const uid = currentUser ? currentUser.uid : null;

  useEffect(() => {
    const jobsRef = ref(db, `users/${uid}/jobs`);
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      const jobs = data
        ? Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        : [];
      setJobs(jobs);
        
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const jobsRef = ref(db, `users/${currentUser.uid}/jobs/`);
    push(jobsRef, {
      logo: jobPosting.logo,
      work: jobPosting.work,
      job: jobPosting.job,
      location: jobPosting.location,
      salary: jobPosting.salary,
      field: jobPosting.field,
      id: jobId,
      
    });
    
  };

  return (
    <>
      <div className="results" key={index}>
        <div className="flex-container">
          <div className="logo">{jobPosting.logo}</div>
          <h5 className="job">{jobPosting.job}</h5>
        </div>
        <div className="flex-column">
          <div className={jobPosting.work}>{jobPosting.work}</div>
          <div className="salary">{jobPosting.salary}</div>
        </div>
        <div className="flex-column">
          <div className="location">{jobPosting.location}</div>
          <div className="field">{jobPosting.field}</div>
        </div>
        <div className="buttons">
          <button onClick={handleClick}>Add</button>
          <Link to={`/job/${jobId}`} state={jobPosting}>
            View Job
          </Link>
        </div>
      </div>
      <SavedJobs jobs={jobs} />
    </>
  );
};

export default JobCard;

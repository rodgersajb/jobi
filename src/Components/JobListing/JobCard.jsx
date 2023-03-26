import { useEffect, useState, useContext } from "react";
import { update, ref, remove, onValue, set, push } from "firebase/database";
import { db } from "../firebase";
import { AuthContext } from "../../Contexts/AuthContext";

const JobCard = (props) => {
  const { jobPosting, index } = props;

//   console.log(JobCard);

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);

  const uid = currentUser ? currentUser.uid : null;

  console.log(currentUser, 'CURRENT USER')

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
          <button>Apply</button>
        </div>
      </div>
    </>
  );
};

export default JobCard;

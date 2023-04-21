import upload from "../../../public/assets/assets/upload.png";
import { jobPostings } from "../Jobs";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  // create states for the two input fields and dropdown menu
  //create state for results from filtering through the above three states

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Mountain View, CA");
  const [field, setField] = useState("");
  const [results, setResults] = useState([]);

  // handleSubmit function that will filter through jobPostings array and setResults based on the search

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredJobs = jobPostings.filter((info) => {
      return (
        info.job === title && info.location === location && info.field === field
      );
    });
    setResults(filteredJobs);
    console.log(results, "filtered Jobs");
  };

  // map through job postings and return the locations

  const locations = jobPostings.map((job) => {
    return job.location;
  });

  // filter through locations and their indexes
  // return the first index of the location with indexOf method

  const uniqueLocations = locations.filter(
    (location, index) => locations.indexOf(location) == index
  );

  return (
    <>
      <header>
        <h1>Find your job without any hassle.</h1>
        <p>Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="jobs">Job Categories</label>
            <input
              type="text"
              placeholder="UX Desginer"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
              onChange={(event) => setLocation(event.target.value)}
            >
              {uniqueLocations.map((location) => {
                return <option value={location}>{location}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="title">Keyword or Title</label>
            <input
              type="text"
              id="title"
              placeholder="Design, branding"
              onChange={(event) => setField(event.target.value)}
              value={field}
            />
          </div>
          <button>Search</button>
        </form>
        
          {Object.values(results).map((result, index) => {
            return (
              <div className="results" key={index}>
                <div className="flex-container">
                  <div className="logo">{result.logo}</div>
                  <h5 className="job">{result.job}</h5>
                </div>
                <div className="flex-column">
                  <div className={result.work}>{result.work}</div>
                  <div className="salary">{result.salary}</div>
                </div>
                <div className="flex-column">
                  <div className="location">{result.location}</div>
                  <div className="field">{result.field}</div>
                </div>
                <div className="buttons">
                  {/* <button onClick={handleClick}>Add</button> */}
                  {/* <Link to={`/job/${jobId}`} state={jobPosting}>
                    View Job
                  </Link> */}
                </div>
              </div>
            );
          })}
        
        <h5>
          Upload your cv <img src={upload} alt="upload file" />
        </h5>
      </header>
    </>
  );
};

export default Header;

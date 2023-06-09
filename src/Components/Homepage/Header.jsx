import arrow from "../../../public/assets/assets/upload.png";
import { jobPostings } from "../Jobs";
import { useState } from "react";
import background from "../../assets/h-background.jpg";
// import { Link } from "react-router-dom";
// import { jobId } from "../JobListing/JobCard";

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

  //map through job posting and return the job categories

  const categories = jobPostings.map((category, index) => {
    return category.job;
  });

  const uniqueCategories = categories.filter((category, index) => {
    return categories.indexOf(category) == index;
  });

  return (
    <>
      <header>
        <h1>Find your job without any hassle.</h1>
        <p>Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="jobs" id="jobs">Job Categories</label>
            <select
              name="categories"
              value={title}
              id=""
              onChange={(event) => setTitle(event.target.value)}
            >
              {uniqueCategories.map((category, index) => {
                return <option>{category}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="location" id="location">Location</label>
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
                {/* <Link to={`/job/${jobId}`} state={jobPostings}>
                    View Job
                  </Link> */}
              </div>
            </div>
          );
        })}
      </header>
      <div className="background-container">
        <img src={background} alt="" />
      </div>
    </>
  );
};

export default Header;

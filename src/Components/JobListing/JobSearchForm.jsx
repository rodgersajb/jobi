import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { jobPostings } from "../Jobs";


const JobSearchForm = () => {
  console.log(jobPostings)
  const [userInput, setUserInput] = useState('');
  const [userSelect, setUserSelect] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSelect = (event) => {
    setUserSelect(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
 
  // useEffect for canSubmit status, must be a userInput AND/OR userSelect to perform Search 
  useEffect(() => {
    setCanSubmit(userInput && userSelect)
  }, [userInput, userSelect])
  
  

 
  return (
    <>
      <div className="content-container">
        
      

        <h2>Job Listing</h2>
        <h5>We delivered blazing fast & striking work solution</h5>
        <img src="src/assets/box-reg.jpg" alt="" />
        <form action="" className="job-search" onSubmit={handleSubmit}>
          <div className="input-search">
            <label htmlFor="user-search">What are you looking for?</label>
            <input type="text" id="user-search" placeholder="UI Designer" onChange={handleChange} value={userInput} />
          </div>
          <div className="input-category">
            <label htmlFor="category">Category</label>
            <div className="input-category-flex">
              <select name="category" id="category" onChange={handleSelect}>
                {console.log(userSelect, 'USER SELECT')}
                <option value="Web Design">Web Design</option>
                {jobPostings &&
                  jobPostings.map((jobPosting, index) => {
                    return <option key={index}>{jobPosting.job}</option>;
                  })}
              </select>
            </div>
          </div>
          <button disabled={!canSubmit} type="submit" className="job-search-btn">Search</button>
        </form>
      </div>
      <section className="job-search-results">
        <div className="filter-search">
          <label htmlFor="filter">Filter by</label>
          <option value=""></option>
          <select name="filter" id="filter"></select>
        </div>
        {jobPostings &&
          jobPostings.filter((item) => {
            
            return userInput.toLowerCase() === '' ? item : item.job.toLowerCase().includes(userInput);
          }).map((jobPosting, index) => {
            return (
              <JobCard jobPosting={jobPosting} index={index} key={index} />
            );
          })}
      </section>
    </>
  );
};
export default JobSearchForm;

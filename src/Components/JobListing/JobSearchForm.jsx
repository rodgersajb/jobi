const JobSearchForm = ({ filteredJobPostings }) => {
  //

  return (
    <>
      <div className="content-container">
        <h2>Job Listing</h2>
        <h5>We delivered blazing fast & striking work solution</h5>
        <img src="src/assets/box-reg.jpg" alt="" />
        <form action="" className="job-search">
          <div className="input-search">
            <label htmlFor="user-search">What are you looking for?</label>
            <input type="text" id="user-search" placeholder="UI Designer" />
          </div>
          <div className="input-category">
            <label htmlFor="category">Category</label>
            <div className="input-category-flex">
              <select name="category" id="category">
                <option value="Web Design">Web Design</option>
                {filteredJobPostings &&
                  filteredJobPostings.map((jobPosting, index) => {
                    return <option key={index}>{jobPosting.job}</option>;
                  })}
              </select>
            </div>
          </div>
          <button className="job-search-btn">Search</button>
        </form>
      </div>
      <section className="job-search-results">
        <div className="filter-search">
          <label htmlFor="filter">Filter by</label>
          <option value=""></option>
          <select name="filter" id="filter"></select>
        </div>
        {filteredJobPostings &&
          filteredJobPostings.map((jobPosting, index) => {
            return (
              <div className="results" key={index}>
                <div className="flex-container">
                  <div className="logo">{jobPosting.logo}</div>
                  <h5 className="job">{jobPosting.job}</h5>
                </div>
                <div className="flex-column">
                  <div className="work">{jobPosting.work}</div>
                  <div className="salary">{jobPosting.salary}</div>
                </div>
                <div className="flex-column">
                  <div className="location">{jobPosting.location}</div>
                  <div className="field">{jobPosting.field}</div>
                </div>
                <div className="buttons">
                  <button>Add</button>
                  <button>Apply</button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};
export default JobSearchForm;

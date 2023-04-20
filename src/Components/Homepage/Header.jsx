import upload from "../../../public/assets/assets/upload.png";
import { jobPostings } from "../Jobs";

const Header = () => {
  console.log(jobPostings, "JOB POSTINGS HEADER");

  // map through job postings and return the locations

  const locations = jobPostings.map((job) => {
    return job.location
  })

  console.log(locations)
  // filter through locations and their indexes
  // return the first index of the location with indexOf method

  const uniqueLocations = locations.filter((location, index) => locations.indexOf(location) == index)
console.log(uniqueLocations, 'uni')
  return (
    <>
      <header>
        <h1>Find your job without any hassle.</h1>
        <p>Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
        <form action="">
          <div>
            <label htmlFor="jobs">Job Categories</label>
            <input type="text" placeholder="UX Desginer" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select name="location" id="location">
              {uniqueLocations.map((location) => {
                return <option value="">{location}</option>
              })}
            </select>
          </div>
          <div>
            <label htmlFor="title">Keyword or Title</label>
            <input type="text" id="title" placeholder="Design, branding" />
          </div>
          <button>Search</button>
        </form>
        <h5>
          Upload your cv <img src={upload} alt="upload file" />
        </h5>
      </header>
    </>
  );
};

export default Header;

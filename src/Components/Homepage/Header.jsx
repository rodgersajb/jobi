import upload from "../../../public/assets/assets/upload.png";
import { jobPostings } from "../Jobs";

const Header = () => {
 console.log(jobPostings, 'JOB POSTINGS HEADER')

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
              {jobPostings.map((job, index) => {
                return (
                  <option value="">{job.location}</option>
                )
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

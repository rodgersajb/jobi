import upload from "../../../public/assets/assets/upload.png";

const Header = ({ filteredJobPostings }) => {
  console.log(filteredJobPostings);

  return (
    <>
      <header>
        <h1>Find your job without any hassle.</h1>
        <p>Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
        <form action="">
          <div>
            <label htmlFor="jobs">Job Categories</label>
            <select name="jobs" id="jobs">
              <option value="">Designer</option>
              <option value="">Engineer</option>
              <option value="">Web Development</option>
              <option value="">Freelance</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select name="location" id="location">
              <option value="whitby">Whitby, ON</option>
              <option value="oshawa">Oshawa, ON</option>
              <option value="bomanville">Bomanville, ON</option>
              <option value="ajax">Ajax, ON</option>
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
import Navbar from "../Navbar";
import Footer from "../Footer";

const JobListing = (props) => {
  console.log(props)
  return (
    <>
      <Navbar />
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
              </select>
            </div>
          </div>
          <button className="job-search-btn">Search</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JobListing;

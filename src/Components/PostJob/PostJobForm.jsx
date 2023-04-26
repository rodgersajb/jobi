import Navbar from "../Navbar";
import Footer from "../Footer";
import AddressLocation from "./AddressLocation";
import JobDetails from "./JobDetails";
import Map from "./Map";
import { ModalProvider } from "../../Contexts/ModalContext";
import SkillsExperience from "./SkillsExperience";

import { useState } from "react";

import LoginModal from "../LoginModal";

const PostJobForm = () => {
  const [city, setCity] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
  };

  console.log(city);

  return (
    <>
      <ModalProvider>
        <Navbar />
        <div className="content-container">
          <h2>Post Job</h2>
          <h5>Create an account & Start posting or hiring talents</h5>
          <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <section className="post-job">
          <form action="" onSubmit={handleOnSubmit}>
            <JobDetails />
            <SkillsExperience />
            <AddressLocation />
            <div className="map-location">
              <label htmlFor="">Map Location*</label>

              <input
                type="text"
                placeholder="XC23+6XC, Morian,N105"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="map" id="map">
              <Map city={city} />
            </div>

            <div className="button-container">
              <button>Add</button>
              <button>Cancel</button>
            </div>
          </form>
        </section>

        <Footer />
      </ModalProvider>
    </>
  );
};

export default PostJobForm;

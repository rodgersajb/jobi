import Navbar from "../Navbar";
import Footer from "../Footer";
import AddressLocation from "./AddressLocation";
import JobDetails from "./JobDetails";



import { useState} from "react";

import LoginModal from "../LoginModal";

import { ModalProvider } from "../../Contexts/ModalContext";
import SkillsExperience from "./SkillsExperience";

const PostJobForm = () => {
  

  return (
    <>
      <ModalProvider>
        <Navbar />
        <section className="post-job">
          <form action="" >
            <JobDetails />
            <SkillsExperience />
            <AddressLocation />
            <div className="map-location">
              <form action="" className="location-submit">
                <label htmlFor="">Map Location*</label>
                <input type="text" placeholder="XC23+6XC, Morian,N105" />
              </form>
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

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
    setCity(event.target.value);
  };

  console.log(city);

  return (
    <>
      <ModalProvider>
        <Navbar />
        <section className="post-job">
          <form action="">
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

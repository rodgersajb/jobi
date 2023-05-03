import Navbar from "../Navbar";
import Footer from "../Footer";
import AddressLocation from "./AddressLocation";
import JobDetails from "./JobDetails";
import Map from "./Map";
import { ModalProvider } from "../../Contexts/ModalContext";
import SkillsExperience from "./SkillsExperience";
import Hamburger from "../Hamburger";

import { useState, useEffect } from "react";

import { db } from "../firebase";
import { ref, onValue, push, set } from "firebase/database";
import { jobPostings } from "../Jobs";

import LoginModal from "../LoginModal";

const PostJobForm = () => {
  const [city, setCity] = useState("");

  const [experienceOption, setExperienceOption] = useState("");
  const [qualificationOption, setQualificationOption] = useState("");
  const [industryOption, setIndustryOption] = useState("");
  const [careerOption, setCareerOption] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobPostings, setJobPostings] = useState([]);
  const [companyName, setCompanyName] = useState("");

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleExperienceChange = (event) => {
    setExperienceOption(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setQualificationOption(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setIndustryOption(event.target.value);
  };

  const handleCareerChange = (event) => {
    setCareerOption(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleMinChange = (event) => {
    setMin(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };

  const handleJobCategoryChange = (event) => {
    setJobCategory(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleSalaryTypeChange = (event) => {
    setSalaryType(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const [text, setText] = useState("");
  
  function handleChange(value) {
    setText(value);
  }

  //   const date = date.Now();

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const jobsRef = ref(db, "jobs");
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();

      const jobPosting = data
        ? Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        : [];
      setJobPostings(jobPosting);
    });
  }, []);



  const handleFormSubmit = () => {
    const jobsRef = ref(db, "jobs");
    push(jobsRef, {
      logo: companyName,
      work: careerOption,
      job: jobTitle,
      location: [
        location,
        state,
      ],
    
      salary: `$${min} - ${max} $${salaryType}`,
      field: industryOption,
      jobDescription: text,
      requiredSkills: skills,
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vitae error veniam optio cum consequatur consectetur, ab laboriosam quidem consequuntur quo quod atque itaque. Vitae sed aut voluptatem fugit quibusdam!",
    });
  };

  return (
    <>
      <ModalProvider>
        <Navbar />
        <Hamburger />
        <div className="content-container">
          <h2>Post Job</h2>
          <h5>Create an account & Start posting or hiring talents</h5>
          <img src="src/assets/box-reg.jpg" alt="" />
        </div>
        <section className="post-job">
          <form action="" onSubmit={handleOnSubmit}>
            <JobDetails
              jobTitle={jobTitle}
              handleJobTitleChange={handleJobTitleChange}
              text={text}
              handleChange={handleChange}
              jobCategory={jobCategory}
              handleJobCategoryChange={handleJobCategoryChange}
              jobType={jobType}
              handleJobTypeChange={handleJobTypeChange}
              min={min}
              handleMinChange={handleMinChange}
              max={max}
              handleMaxChange={handleMaxChange}
              salaryType={salaryType}
              handleSalaryTypeChange={handleSalaryTypeChange}
              companyName={companyName}
              handleCompanyNameChange={handleCompanyNameChange}
              handleFocus={handleFocus}
              focused={focused}
            />
            <SkillsExperience
              careerOption={careerOption}
              handleCareerChange={handleCareerChange}
              industryOption={industryOption}
              handleIndustryChange={handleIndustryChange}
              qualificationOption={qualificationOption}
              handleQualificationChange={handleQualificationChange}
              experienceOption={experienceOption}
              handleExperienceChange={handleExperienceChange}
              skills={skills}
              setSkills={setSkills}
            />
            <AddressLocation
              address={address}
              handleAddressChange={handleAddressChange}
              country={country}
              handleCountryChange={handleCountryChange}
              location={location}
              handleLocationChange={handleLocationChange}
              state={state}
              handleStateChange={handleStateChange}
            />
            <div className="map-location">
              <label htmlFor="">Map Location*</label>

              <input
                type="text"
                placeholder="XC23+6XC, Morian, N105"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="map" id="map">
              <Map city={city} />
            </div>

            <div className="button-container">
              <button onClick={handleFormSubmit}>Add</button>
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

import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheck);

const SkillsExperience = (props) => {
    const {careerOption, handleCareerChange, qualificationOption, handleQualificationChange, industryOption, handleIndustryChange, experienceOption, handleExperienceChange, skills, setSkills} = props;
   

  
  const [userInput, setUserInput] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const onAddSkill = () => {
    userInput.length <= 3 ? setCanSubmit(false) : setCanSubmit(!canSubmit);
    setSkills([...skills, userInput]); // Push userInput into skills array
    setUserInput(""); // Reset userInput to empty string
  };

  
  const industries = [
    "Information Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
    "Construction",
    "Transportation",
    "Hospitality",
    "Media",
    "Energy",
    "Agriculture",
    "Telecommunications",
    "Real Estate",
    "Entertainment",
    "Marketing",
    "Government",
    "Nonprofit",
    "Legal",
    "Sports",
  ];

  const experiences = [
    "Entry-level",
    "Mid-level",
    "Senior-level",
    "Freelance",
    "Internship",
  ];

  const careerLevels = [
    "Entry-level",
    "Experienced",
    "Manager",
    "Executive",
    "Director",
  ];

  const qualifications = [
    "High School Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
    "Certification",
    "Associate's Degree",
    "Professional License",
    "Technical Certification",
    "Vocational Training",
    "Postgraduate Diploma",
  ];

  return (
    <>
      <h4>Skills & Experience</h4>
      <div className="skills">
        <label htmlFor="">Skills*</label>
        <div className="add-skills">
          <input
            type="text"
            placeholder="Add Skills"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            
          />
          <button
            type="submit"
            onClick={onAddSkill}
            style={
              userInput.length < 3 ? { display: "none" } : { display: "block" }
            }
          >
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </button>
        </div>
      </div>
      <div className="skill-array">
        {skills.map((skill, index) => {
          return (
            <>
              <div key={index}>{skill}</div>
            </>
          );
        })}
      </div>
      <div className="grid-container">
        <div className="experience">
          <label htmlFor="">Experience*</label>
          <select name="" id="" value={experienceOption} onChange={handleExperienceChange}>
            {experiences.map((experience) => {
              return <option>{experience}</option>;
            })}
          </select>
        </div>
        <div className="qualification">
          <label htmlFor="">Qualifications*</label>
          <select name="" id="" value={qualificationOption} onChange={handleQualificationChange}>
            {qualifications.map((qualification) => {
              return <option>{qualification}</option>;
            })}
          </select>
        </div>
        <div className="industry">
          <label htmlFor="">Industry*</label>
          <select name="" id="" value={industryOption} onChange={handleIndustryChange}>
            {industries.map((industry) => {
              return <option>{industry}</option>;
            })}
          </select>
        </div>
        <div className="career-level">
          <label htmlFor="">Career Level</label>
          <select name="" id="" value={careerOption} onChange={handleCareerChange}>
            {careerLevels.map((career) => {
              return <option >{career}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SkillsExperience;

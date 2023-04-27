import { useState } from "react";

const SkillsExperience = () => {
  const [skills, setSkills] = useState([]);
  const [userInput, setUserInput] = useState("");

  const onAddSkill = () => {
    setSkills([...skills, userInput]); // Push userInput into skills array
    setUserInput(""); // Reset userInput to empty string
  };

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
          <button type="submit" onClick={onAddSkill} />
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
          <select name="" id="">
            <option value="">Experience</option>
          </select>
        </div>
        <div className="qualification">
          <label htmlFor="">Qualifications*</label>
          <select name="" id="">
            <option value="">Qualifications</option>
          </select>
        </div>
        <div className="industry">
          <label htmlFor="">Industry*</label>
          <select name="" id="">
            <option value="">Select industry</option>
          </select>
        </div>
        <div className="career-level">
          <label htmlFor="">Career Level</label>
          <select name="" id="">
            <option value="">Select Career</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SkillsExperience;

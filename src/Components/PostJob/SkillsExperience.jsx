
const SkillsExperience = () => {
    return (
      <>
        <h4>Skills & Experience</h4>
        <div className="skills">
          <label htmlFor="">Skills*</label>
          <input type="text" placeholder="Add Skills" />
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
}

export default SkillsExperience;
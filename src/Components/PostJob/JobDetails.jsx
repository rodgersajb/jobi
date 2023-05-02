import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const JobDetails = (props) => {

    const {jobTitle, handleJobTitleChange, text, handleChange, min, handleMinChange, max, handleMaxChange, jobType, handleJobTypeChange, jobCategory, handleJobCategoryChange, salaryType, handleSalaryTypeChange, companyName, handleCompanyChange, handleFocus, focused} = props;
    const toolbarOptions = [
        ["bold", "italic", "underline"],
        [{ header: [1, 2, false] }],
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
    ];
    
  

     const jobCategories = [
       "Software Development",
       "Marketing",
       "Sales",
       "Finance",
       "Human Resources",
       "Operations",
       "Engineering",
       "Customer Service",
       "Design",
       "Data Analysis",
       "Project Management",
       "Content Creation",
       "Public Relations",
       "Business Development",
       "Consulting",
       "Research",
       "Education",
       "Healthcare",
       "Hospitality",
       "Legal",
     ];

     const jobTypes = [
       "Full-time",
       "Part-time",
       "Contract",
       "Freelance",
       "Internship",
     ];

     const payments = [
       "Weekly",
       "Bi-weekly",
       "Monthly",
       "Yearly",
       "Hourly",
     ];



  return (
    <>
      <h4>Job Details</h4>
      <div className="job-title">
        <label>Job Title*</label>
        <input type="text" placeholder="Ex: Product Designer"  value={jobTitle} onChange={handleJobTitleChange} onBlur={handleFocus} focused={focused.toString()}
        />
        <span className="error">Please fill out this field</span>
      
      
        <label htmlFor="">Company Name*</label>
        <input type="text" placeholder="Ex. Google" value={companyName} onChange={handleCompanyChange} onBlur={handleFocus} focused={focused.toString()}

        />
        </div>
      <div className="job-description">
        <label htmlFor="">Job Description*</label>
        <ReactQuill
          value={text}
          onChange={handleChange}
          modules={{ toolbar: toolbarOptions }}
          placeholder="Write about the job in detail..."
          style={{ height: "250px", padding: "2rem 0 4rem 0" }}
          
        />
      </div>
      <div className="flex-container">
        <div className="category">
          <label htmlFor="">Job Category*</label>
          <select name="" id="" value={jobCategory} onChange={handleJobCategoryChange}>
            {jobCategories.map((job) => {
              return <option>{job}</option>;
            })}
          </select>
        </div>
        <div className="job-type">
          <label htmlFor="">Job Type*</label>
          <select name="" id="" value={jobType} onChange={handleJobTypeChange}>
            {jobTypes.map((type) => {
              return <option>{type}</option>;
            })}
          </select>
        </div>

        <div className="salary">
          <label htmlFor="">Salary*</label>
          <select name="" id="" value={salaryType} onChange={handleSalaryTypeChange}>
            {payments.map((payment) => {
              return <option>{payment}</option>;
            })}
          </select>
        </div>
        <div className="min">
          <input type="text" placeholder="Min" value={min} onChange={handleMinChange} onBlur={handleFocus} focused={focused.toString()}/>
          <span>$</span>
        </div>
        <div className="max">
          <input type="text" placeholder="Max" value={max} onChange={handleMaxChange}/>
          <span>$</span>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

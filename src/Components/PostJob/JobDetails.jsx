import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const JobDetails = () => {

     const toolbarOptions = [
       ["bold", "italic", "underline"],
       [{ header: [1, 2, false] }],
       [{ font: [] }],
       [{ size: ["small", false, "large", "huge"] }],
       [{ color: [] }, { background: [] }],
       [{ align: [] }],
       ["clean"],
     ];

     const [text, setText] = useState("");

     function handleChange(value) {
       setText(value);
     }

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
       "Per project",
       "Hourly",
     ];



  return (
    <>
      <h4>Job Details</h4>
      <div className="job-title">
        <label>Job Title*</label>
        <input type="text" placeholder="Ex: Product Designer"  />
      </div>
      <div className="job-description">
        <label htmlFor="">Job Description*</label>
        <ReactQuill
          value={text}
          onChange={handleChange}
          modules={{ toolbar: toolbarOptions }}
          placeholder="Write about the job in detail..."
          style={{ height: "250px", padding: "2rem 0 4rem 0" }}
          required
        />
      </div>
      <div className="flex-container">
        <div className="category">
          <label htmlFor="">Job Category*</label>
          <select name="" id="">
            {jobCategories.map((job) => {
              return <option>{job}</option>;
            })}
          </select>
        </div>
        <div className="job-type">
          <label htmlFor="">Job Type*</label>
          <select name="" id="">
            {jobTypes.map((type) => {
              return <option>{type}</option>;
            })}
          </select>
        </div>

        <div className="salary">
          <label htmlFor="">Salary*</label>
          <select name="" id="">
            {payments.map((payment) => {
              return <option>{payment}</option>;
            })}
          </select>
        </div>
        <div className="min">
          <input type="text" placeholder="Min" />
          <span>$</span>
        </div>
        <div className="max">
          <input type="text" placeholder="Max" />
          <span>$</span>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

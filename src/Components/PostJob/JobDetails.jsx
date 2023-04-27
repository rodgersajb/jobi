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
        />
      </div>
      <div className="flex-container">
        <div className="category">
          <label htmlFor="">Job Category</label>
          <select name="" id="">
            <option value="">Designer</option>
          </select>
        </div>
        <div className="job-type">
          <label htmlFor="">Job Type</label>
          <select name="" id="">
            <option value="">Full time</option>
          </select>
        </div>
    

        <div className="salary">
          <label htmlFor="">Salary*</label>
          <select name="" id="">
            <option value="">Monthly</option>
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

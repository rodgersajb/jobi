import Navbar from "../Navbar";
import Footer from "../Footer";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";

import { useState, useRef } from "react";

import LoginModal from "../LoginModal";

import { ModalProvider } from "../../Contexts/ModalContext";

const PostJobForm = () => {
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

  const position = [43.90594789926023, -78.79483667280418];

  return (
    <>
      <ModalProvider>
        <Navbar />
        <section className="post-job">
          <form action="">
            <h4>Job Details</h4>
            <div className="job-title">
              <label>Job Title*</label>
              <input type="text" placeholder="Ex: Product Designer" required />
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
            <h4>Address & Location</h4>
            <div className="address">
              <label htmlFor="">Address*</label>
              <input type="text" placeholder="Add Address" />
            </div>
            <div className="container">
              <div className="country">
                <label htmlFor="">Country*</label>
                <select name="" id="">
                  <option value="">Select Country</option>
                </select>
              </div>
              <div className="city">
                <label htmlFor="">City*</label>
                <input type="text" placeholder="Enter City" />
              </div>
              <div className="state">
                <label htmlFor="">State*</label>
                <input type="text" placeholder="Enter State" />
              </div>
            </div>
            <div className="map-location">
              <label htmlFor="">Map Location*</label>
              <input type="text" placeholder="XC23+6XC, Morian,N105" />
            </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
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

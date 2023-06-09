import "./styles/sass/styles.scss";
import Home from "./Components/Homepage/Home";
import Register from "./Components/Register";
import AboutPage from "./Components/AboutPage/AboutPage";
import JobListings from "./Components/JobListing/JobListing";
import JobDetails from "./Components/JobDetails";
import ErrorPage from "./Components/ErrorPage";
import SavedJobs from "./Components/SavedJobs";
import PostJobForm from "./Components/PostJob/PostJobForm";
import Contact from "./Components/Contact/Contact";


import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path ="/job/:id" element={<JobDetails />} />
            <Route path ="/postjob" element={<PostJobForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path ="/saved" element={<SavedJobs />} />
            <Route path ="*" element={<ErrorPage /> } />
          </Routes>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;

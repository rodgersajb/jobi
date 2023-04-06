import "./styles/sass/styles.scss";
import Home from "./Components/Homepage/Home";
import Register from "./Components/Register";
import AboutPage from "./Components/AboutPage/AboutPage";
import JobListings from "./Components/JobListing/JobListing";
import JobDetails from "./Components/JobDetails";
import ErrorPage from "./Components/ErrorPage";
import SavedJobs from "./Components/SavedJobs";


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
            <Route path ="/404" element={<ErrorPage /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path ="/job/:id" element={<JobDetails />} />
            <Route path ="/saved" element={<SavedJobs />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import "./styles/sass/styles.scss";
import Home from "./Components/Homepage/Home";
import Register from "./Components/Register";
import AboutPage from "./Components/AboutPage/AboutPage";
import JobListing from "./Components/JobListing/JobListing";
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
            <Route path="/jobs" element={<JobListing />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import Navbar from "../Navbar";
import Footer from "../Footer";
import JobSearchForm from "./JobSearchForm";
import Jobs from "../Jobs";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import JobDetails from "../JobDetails";


const JobListings = () => {
  
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Jobs />
      <JobDetails />
      
      
      <Footer />
    </>
  );
};

export default JobListings;

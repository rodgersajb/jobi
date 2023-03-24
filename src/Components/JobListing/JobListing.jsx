import Navbar from "../Navbar";
import Footer from "../Footer";
import JobSearchForm from "./JobSearchForm";
import Jobs from "../Jobs";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const JobListings = () => {
  
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Jobs />
      
      
      <Footer />
    </>
  );
};

export default JobListings;

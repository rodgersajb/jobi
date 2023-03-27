import Navbar from "../Navbar";
import Footer from "../Footer";

import Jobs from "../Jobs";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";


const JobListings = () => {
  
  return (
    <>
      <Navbar />

      <Jobs />

      <Footer />
    </>
  );
};

export default JobListings;

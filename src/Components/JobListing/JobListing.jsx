import Navbar from "../Navbar";
import Footer from "../Footer";
import SlideOutNav from "../slideOutNav";

import Jobs from "../Jobs";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import LoginModal from "../LoginModal";

import { ModalProvider } from "../../Contexts/ModalContext";
import Hamburger from "../Hamburger";

const JobListings = () => {
  return (
    <>
      <ModalProvider>
        <Navbar />
        <Hamburger />
        

        <LoginModal />

        <Jobs />
      </ModalProvider>

      <Footer />
    </>
  );
};

export default JobListings;

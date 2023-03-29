import Navbar from "../Navbar";
import Footer from "../Footer";

import Jobs from "../Jobs";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import LoginModal from "../LoginModal";

import { ModalProvider } from "../../Contexts/ModalContext";

const JobListings = () => {
  return (
    <>
      <ModalProvider>
        <Navbar />

        <LoginModal />
      </ModalProvider>

      <Jobs />

      <Footer />
    </>
  );
};

export default JobListings;

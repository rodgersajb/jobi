import Navbar from "../Navbar";
import Footer from "../Footer";


import Jobs from "../Jobs";

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

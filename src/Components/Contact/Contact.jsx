import Navbar from "../Navbar";
import { ModalProvider } from "../../Contexts/ModalContext";
import Hamburger from "../Hamburger";
import ContactInfo from "./ContactInfo";

import Footer from "../Footer";

const Contact = () => {
  return (
    <section className="contact">
      <ModalProvider>
        <Hamburger/>
        <Navbar />

        <ContactInfo />
        <Footer />
      </ModalProvider>
    </section>
  );
};

export default Contact;

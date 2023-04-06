import Nav from "./Nav";
import Header from "./Header";
import Categories from "./Categories";
import JobFind from "./JobFind";
import Trusted from "./Trusted";
import FindTalent from "./FindTalent";
import QA from "./QA";
import Footer from "../Footer";
import LoginModal from "../LoginModal";
import { ModalProvider } from "../../Contexts/ModalContext";
import Hamburger from "../Hamburger";
import Jobs from "../Jobs";

const Home = () => {
 

  return (
    <>
      
      <ModalProvider>
        <Nav />
        {/* <Jobs /> */}
      
        <div className="wrapper">
          <Hamburger />

          <Header />
          <Categories />
          <JobFind />
          <Trusted />
          <FindTalent />
          <QA />
        </div>
        <Footer />
        <LoginModal />
      </ModalProvider>
    </>
  );
};

export default Home;

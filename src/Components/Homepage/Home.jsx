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

const Home = () => {
  return (
    <>
      <ModalProvider>
        <Nav />
        <div className="wrapper">
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

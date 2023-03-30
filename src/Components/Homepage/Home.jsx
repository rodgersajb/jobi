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
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

const Home = () => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  console.log(currentUser, 'HEY')
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

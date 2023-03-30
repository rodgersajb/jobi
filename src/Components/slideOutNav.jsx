import { useState } from "react";

const SlideOutNav = () => {
 
    const [burger, setBurger] = useState("burger unclicked");
    const [menu, setMenu] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const update = () => {
        if (!isMenuClicked) {
            setBurger("burger clicked")
            setMenu("menu visible")
        }
        else {
            setBurger("burger unclicked")
            setMenu("menu hidden")
        }
    }

  return (
    <>

    <div className="flex-container">
      <div className="burger-nav">

      <div className="hamburger">
        <div className="bar" onClick={update}></div>
        <div className="bar" onClick={update}></div>
        <div className="bar" onClick={update}></div>
      </div>
        <ul className="slide-out">
          <li>Category</li>
          <li>Home</li>
          <li>Explore</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>

    </div>
      <div className="slide-out"></div>
    </>
  );
};

export default SlideOutNav;

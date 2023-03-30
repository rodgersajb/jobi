import { useState, useEffect } from "react";

const SlideOutNav = () => {
  return (
    <>
    <div className="slide-out-nav">
      <input type="checkbox" className="nav-toggle"/>

      <nav className="burger">
        <ul>
          <li>Category</li>
          <li>Home</li>
          <li>Explore</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </nav>
    </div>

      <div className="slide-out">ANYTHING?</div>
    </>
  );
};

export default SlideOutNav;

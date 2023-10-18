import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav>
        <div className="right-side">
          <h2>LOGO</h2>
        </div>
        <div className="left-side">
          {toggle ? (
            <i
              className="fa-solid fa-xmark cross"
              onClick={(e) => setToggle(!toggle)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars hamburger"
              onClick={(e) => setToggle(!toggle)}
            ></i>
          )}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
      {toggle && (
        <div className={`mobile scale-up-hor-left ${toggle ? "show" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

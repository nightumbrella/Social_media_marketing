import React from "react";
import "./header.css";
import logo from "../../Images/logo.png";
import Home from "../home/Home";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar flex space__between">
        <div className="navbar__left flex">
          <img src={logo} alt="logo" className="navbar__logo"/>
          <ul className="flex navbar__list">
            <li>
              <a href="#">Demos</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="profile">
          <button className="profile__sign__btn">Sign In</button>
          <button className="btn__watch">Get started free</button>
        </div>
      </nav>

      <Home />
    </div>
  );
};

export default Header;

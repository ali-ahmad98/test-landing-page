import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";

import AppLogo from "assets/AppLogo.png";
import Button from "shared/Button/Button";

import "./Header.scss";

const Header2 = () => {
  return (
    <div className="header-container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <Button text="Trial for 7 days" /> &nbsp; &nbsp;
          <BiMenu style={{ fontSize: "40px", color: "black" }} />
        </label>
        <label className="logo">
          <img src={AppLogo} alt="AppLogo" />
        </label>
        <ul className="trial-button">
          <Button text="Trial for 7 days" />
        </ul>

        <ul className="menu-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#ourstory">Our Story</a>
          </li>
          <li>
            <a href="#downloadapp">Download App</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header2;

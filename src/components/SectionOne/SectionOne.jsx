import { Button } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/swoosh.png";
import Buttons from "../Button/Buttons";
import Features from "../features/Features";
import "./sectionOne.css";

const SectionOne = () => {
  return (
    <div className="mainTop">
      {/* logo div */}
      <div className="header mainheader">
        <span className="logo">
          <img
            width="140"
            height="33"
            className="main-logo"
            src={logo}
            alt=""
          />
        </span>
        <span className="logIn">Log In</span>
      </div>

      {/* top div */}
      <span className="back">
        <img width="100%" src={backgroundImage} alt="" />
      </span>
      <div className="mainHeading">
        <p className="heading">Aim High With Brilliant Writing</p>
        <span className="cent">
          <Buttons text="Upgrade to Grammarly Premium" />
        </span>
      </div>

      <div className="features">
        <div className="featuresLeft">ajldn</div>
        <div className="featuresRight">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

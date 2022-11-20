import React from "react";
// import LinearProgressWithLabel from "@mui/material/LinearProgress";
import "./features.css";

const Features = (props) => {
  const features = [
    {
      title: "Clear, confident communication",
      desc: "Take the guesswork out of great writing.",
    },
    {
      title: "Comprehensive real-time feedback",
      desc: "Effective writing takes more than good grammar.",
    },
    {
      title: "Support you can rely on",
      desc: "Write with a second pair of eyes that never gets tired.",
    },
    {
      title: "Strike the right tone",
      desc: "Make the best impression, every time.",
    },
  ];

  return (
    <div style={{ margin: "70px 90px 0px", width: "355px" }}>
      {features.map((feature) => (
        <div className="featureDiv">
          <p className="title">{feature.title}</p>
          <p className="desc">{feature.desc}</p>
          <div className="progressBar"></div>
        </div>
      ))}
    </div>
  );
};

export default Features;

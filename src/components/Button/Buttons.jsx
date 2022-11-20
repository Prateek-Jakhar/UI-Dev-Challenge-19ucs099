import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div>
      <button
        className={props.text === "Free" ? "buttonFree" : "buttonPremium"}
      >
        {props.text === "Free"
          ? "Current Plan"
          : "Upgrade to Grammarly Premium"}
      </button>
    </div>
  );
};

export default Buttons;

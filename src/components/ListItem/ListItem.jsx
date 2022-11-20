import React from "react";
import greenCheck from "../../assets/greenTick.png";
import "./listItem.css";
import two from "../../assets/clarityFocused.png";
// import two from "../../assets/clarityFocused.png";
import three from "../../assets/ToneAdjustment.png";
import four from "../../assets/Plagiarism.png";
import five from "../../assets/word.png";
import six from "../../assets/Formality.png";
import seven from "../../assets/Fluency.png";
import eight from "../../assets/Additional.png";
import nine from "../../assets/Spelling.png";
import ten from "../../assets/Grammar.png";
import eleven from "../../assets/Punctuation.png";
import twelve from "../../assets/Conciseness.png";

const ListItem = (props) => {
  function renderFunction(param) {
    switch (param) {
      case "one":
        return "";
      case "two":
        return two;
      case "three":
        return three;
      case "four":
        return four;
      case "five":
        return five;
      case "six":
        return six;
      case "seven":
        return seven;
      case "eight":
        return eight;
      case "nine":
        return nine;
      case "ten":
        return ten;
      case "eleven":
        return eleven;
      case "twelve":
        return twelve;
      default:
        return "";
    }
  }
  return (
    <div className="listItem">
      <img height="25px" width="25px" src={greenCheck} alt="" />
      <div className="hover_img1">
        <p className={props.id === "one" ? "bold" : ""}>
          {props.text}
          <span className="something">
            {props.id !== "one" ? (
              <img src={renderFunction(props.id)} alt="image" height="200px" />
            ) : (
              ""
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListItem;

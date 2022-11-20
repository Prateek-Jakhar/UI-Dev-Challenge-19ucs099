import React from "react";
import Buttons from "../Button/Buttons";
import ListItem from "../ListItem/ListItem";
import "./Details.css";

const Details = (props) => {
  const free = [
    { text: "Spelling", photo: "nine" },
    { text: "Grammar", photo: "ten" },
    { text: "Conciseness", photo: "eleven" },
    { text: "Punctuation", photo: "twelve" },
  ];
  const premium = [
    { text: "Everything in Free", photo: "one" },
    { text: "Clarity-focused sentence rewrites", photo: "two" },
    { text: "Tone adjustments", photo: "three" },
    { text: "Plagiarism detection", photo: "four" },
    { text: "Word choice", photo: "five" },
    { text: "Formality level", photo: "six" },
    { text: "Fluency", photo: "seven" },
    { text: "Additional advanced suggestions", photo: "eight" },
  ];
  return (
    <div className="card">
      <div>
        <p
          style={{ marginBottom: "-10px", marginTop: "20px" }}
          className="firstLine"
        >
          {props.firstLine}
        </p>
        <h3 style={{ marginBottom: "-10px", fontSize: "500" }}>{props.text}</h3>
        <p style={{ height: "60px" }} className="thirdLine">
          {props.thirdLine}
        </p>
        <Buttons text={props.text} />
        <div style={{ marginTop: "15px" }}></div>
        {props.text === "Free"
          ? free.map((item) => <ListItem text={item.text} id={item.photo} />)
          : premium.map((item) => (
              <ListItem text={item.text} id={item.photo} />
            ))}
      </div>
    </div>
  );
};

export default Details;

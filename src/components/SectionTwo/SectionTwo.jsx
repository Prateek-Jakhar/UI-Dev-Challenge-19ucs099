import Details from "../Details/Details";
import "./sectionTwo.css";
import backgroundImage from "../../assets/clarityFocused.png";

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div>
        <h1>Up-Level Your Communication</h1>
      </div>
      <p style={{ fontSize: "18px", lineHeight: "32px" }}>
        Unlock Grammarly Premium’s advanced features and suggestions.
      </p>
      <div className="sideBySide">
        <div>
          <Details
            text="Free"
            firstLine="FOR CASUAL WRITING"
            thirdLine="Basic writing suggestions."
          />
        </div>
        <div>
          <Details
            text="Premium"
            firstLine="FOR WORK OR SCHOOL"
            thirdLine="Style, tone, and clarity improvements for writing at work and school."
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

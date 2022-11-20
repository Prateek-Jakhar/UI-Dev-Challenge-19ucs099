import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="App">
      <div className="section1">
        <SectionOne />
      </div>
      {/* ---------------------------------------- Section 2 ------------------------------------------------------ */}

      <div style={{ marginTop: "50px" }}>
        <SectionTwo />
      </div>
      <div style={{ marginTop: "350px" }}></div>
    </div>
  );
}

export default App;

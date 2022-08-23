import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import { multiStepContext } from "./StepContext";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          ReactJS Multi Step Application
        </h3>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <br />

        <div>{finalData.length > 0 ? <DisplayData /> : ""}</div>
      </header>
    </div>
  );
}

export default App;

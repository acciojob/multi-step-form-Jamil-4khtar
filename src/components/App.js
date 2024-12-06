
import React, { useState } from "react";
import './../styles/App.css';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({});
  switch (step) {
    case 1:
      return (
        <div>
          <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
        </div>
      )
      break;
    case 2:
      return (
        <div>
          <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
        </div>
      )
      break;
    case 3:
      return (
        <div>
          <StepThree formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />
        </div>
      )
      break;

    default:
      return (
        <div>
          {/* Do not remove the main div */}
        </div>
      )
  }

  function nextStep() {
    setStep(prevStep => prevStep + 1)
  }
  function prevStep() {
    setStep(prevStep => prevStep - 1)
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

}

export default App

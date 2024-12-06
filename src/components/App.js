
import React, { useState } from "react";
import './../styles/App.css';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({});
  
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

  return (
    <div>
      {/* Do not remove the main div */}
      {step == 3 && <StepThree formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
      {step == 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step == 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
    </div>
  )

}

export default App

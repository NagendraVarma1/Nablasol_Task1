import { useState } from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";


function App() {
  const [step, setStep] = useState(1)
  return (
    <>
    {step === 1 &&  <FirstPage onNext={() => {setStep(2)}} />}
    {step === 2 && <SecondPage onBack={() => {setStep(1)}} onNext={() => {setStep(3)}} />}
    {step === 3 && <PageThree onBack={() => {setStep(2)}} onNext={() => {setStep(4)}} />}
    {step === 4 && <PageFour onBack={() => {setStep(3)}} onNext={() => {setStep(1)}} />}
    </>
    
  );
}

export default App;

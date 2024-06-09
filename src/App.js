import { useState } from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";


function App() {
  const [step, setStep] = useState(1)
  return (
    <>
    {step === 1 &&  <FirstPage onNext={() => {setStep(2)}} />}
    {step ===2 && <SecondPage onBack={() => {setStep(1)}} onNext={() => {setStep(3)}} />}
    </>
    
  );
}

export default App;

import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [inputVal, setInputVal] = useState({
    initialInvestment: 0.0,
    annualInvestment: 0.0,
    expectedReturn: 0.0,
    duration: 0.0,
  });

  function handleChange(inputID, value) {
    //Value is a string from event.target.value
    setInputVal((prevVal) => {
      return {
        ...prevVal,
        [inputID]: value ? parseFloat(value) : 0,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput inputVal={inputVal} onChange={handleChange} />
      <Results inputVals={inputVal} />
    </>
  );
}

export default App;

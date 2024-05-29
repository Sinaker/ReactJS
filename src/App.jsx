import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [inputVal, setInputVal] = useState({
    initialInvestment: 10000.0,
    annualInvestment: 1200.0,
    expectedReturn: 6.0,
    duration: 10.0,
  });
  return (
    <>
      <Header />
      <UserInput inputVal={inputVal} setInputVal={setInputVal} />
      <Results inputVals={inputVal} />
    </>
  );
}

export default App;

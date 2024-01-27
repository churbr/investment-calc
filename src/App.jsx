import React,{ useState } from "react";
import Header from "./Header"
import UserInput from "./UserInput"
import Results from "./Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, // The amount that is initially invested
    annualInvestment: 1200, // How much money the user wants to invest every year after the initial investment
    expectedReturn: 6, // Expected rate of return, which the user expects to earn every year
    duration: 10 // How long the user plans to hold that investment
  });

  const isValidInput = userInput.duration > 0;

  const handleUserInput = (userInput, newValue) => {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [userInput]: +newValue // prepend + to parse the data to int value
        }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInputData={userInput} onChangeInput={handleUserInput} />
      {!isValidInput && <p className="center">Please enter a duration greater than zero.</p> }
      {isValidInput && <Results input={userInput} />}
    </>
  )
}

export default App

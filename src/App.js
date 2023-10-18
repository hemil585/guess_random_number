import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const [inputNumber, setInputNumber] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [won, setWon] = useState(false);
  const [attempts, setAttempts] = useState(10);
  const [previousNumber, setPreviousNumber] = useState([]);
  const [guessMessage, setGuessMessage] = useState("");

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  if (!randomNumber) {
    setRandomNumber(generateRandomNumber());
  }

  const resetGame = () => {
    setInputNumber("");
    setGuessMessage("");
    setRandomNumber(generateRandomNumber());
    setWon(false);
    setAttempts(10);
    setPreviousNumber([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(inputNumber) >= 0) {
      if (Number(inputNumber)) {
        if (previousNumber.length <= 10 && inputNumber) {
          previousNumber.push(inputNumber);
        }
        if (Number(inputNumber) === randomNumber) {
          setWon(true);
        } else {
          const msg = Number(inputNumber) > randomNumber ? "high" : "low";
          setGuessMessage(msg);
        }
        setAttempts((prev) => prev - 1);
        setInputNumber("");
      } else {
        alert("Enter Number");
      }
    } else {
      alert("Only positive number");
    }
  };

  return (
    <main>
      {/* <Navbar /> */}
      <h1>Guess Random Number</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        {attempts === 0 || won ? (
          <input placeholder="Enter number" disabled />
        ) : (
          <input
            type="text"
            placeholder="Enter number"
            maxLength={3}
            onChange={(e) => setInputNumber(e.target.value)}
            value={inputNumber}
          />
        )}
        <button>Submit</button>
      </form>
      <div className="guessing">
        {guessMessage && (
          <h2>
            Guessed number is{" "}
            <span className={`${guessMessage === "high" ? "red" : "green"}`}>
              {" "}
              {guessMessage}
            </span>
          </h2>
        )}
      </div>
      <h4 className="previously">
        Previously guessed numbers:
        <span>{previousNumber.map((num) => num + " ")}</span>
      </h4>
      <h4 className="attempts">
        You have {attempts === 1 && "only"} <span>{attempts}</span>{" "}
        {attempts <= 1 ? "attempt" : "attempts"} left
      </h4>

      {won && (
        <h4 className="gameover">
          You Won!!!
          <button onClick={() => resetGame()}>Play Again</button>
        </h4>
      )}
      {attempts === 0 && !won ? (
        <h4 className={`gameover`}>
          game over and the random number was <span>{randomNumber}</span>
          <button onClick={() => resetGame()}>Play Again</button>
        </h4>
      ) : null}
    </main>
  );
};

export default App;

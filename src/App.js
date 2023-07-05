import React from 'react'
import "./App.css"
import { useState } from 'react'
import D1 from "./images/dice-six-faces-one.png"
import D2 from "./images/dice-six-faces-two.png"
import D3 from "./images/dice-six-faces-three.png"
import D4 from "./images/dice-six-faces-four.png"
import D5 from "./images/dice-six-faces-five.png"
import D6 from "./images/dice-six-faces-six.png"

function App() {
  const diceImages = [D1, D2, D3, D4, D5, D6];
  const [image, setImage] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[0]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [highRound, setHighRound] = useState(0);

  function rollDice() {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);
    setImage(diceImages[roll1]);
    setImage2(diceImages[roll2]);
    if (roll1 === roll2) {
      setScore(0);
      setRound(0);
    } else {
      setScore(score + roll1 + roll2 + 2);
      setRound(round + 1);
    }
  }

  function saveScore() {
    if (score > highScore) {
      setHighScore(score);
      setHighRound(round);
    }
    setScore(0);
    setRound(0);
  }

  return (
    <div>
      <center>
        <h1>Two-Die Pig</h1>
        <h3>Roll the dice. If you roll doubles you lose your score. Once you save your score, you start from the beginning.</h3>
        <div className="container">
          <img className="square" src={image}></img>
          <div style={{width: "5px", display: "inline-block"}}></div>
          <img className="square" src={image2}></img>
        </div>
        <button className="button" onClick={rollDice}>Roll Dice</button>
        <button className="button" onClick={saveScore}>Save Score</button>
        <div>
          <h1>
            Score: {score}
          </h1>
        </div>
        <div>
          <h2>
            Round: {round}
          </h2>
        </div>
        <div>
          <h3>
            Your highest round saved is {highRound} with a high score of {highScore}
          </h3>
        </div>
      </center>
    </div>
  )
}

export default App
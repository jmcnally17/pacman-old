import React, { useEffect } from "react";
import "./game.css";
import playGame from "./scripts/playGame";

export default function Game({ name, mainEl }) {
  useEffect(() => {
    playGame(name, mainEl);
  }, [name, mainEl]);

  const handleDirection = (direction) => {
    const arrow = new KeyboardEvent("keydown", { key: direction });
    window.dispatchEvent(arrow);
  };

  return (
    <div>
      <h1>Let&apos;s Play {name}!</h1>
      <div className="table">
        <div className="gameInfo">
          <div className="score" id="score"></div>
          <div className="level" id="level"></div>
          <div className="lives" id="lives"></div>
        </div>
      </div>
      <canvas id="board" className="board" width="560" height="620"></canvas>
      <br></br>
      <div className="mobile">
        <button
          className="arrowButton"
          onClick={() => handleDirection("ArrowUp")}
        >
          Up
        </button>
        <br></br>
        <button
          className="arrowButton"
          onClick={() => handleDirection("ArrowLeft")}
        >
          Left
        </button>
        <button
          className="arrowButton"
          onClick={() => handleDirection("ArrowRight")}
        >
          Right
        </button>
        <br></br>
        <button
          className="arrowButton"
          onClick={() => handleDirection("ArrowDown")}
        >
          Down
        </button>
      </div>
    </div>
  );
}

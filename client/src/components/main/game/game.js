import React, { useEffect } from "react";
import "./game.css";
import playGame from "./scripts/playGame";

export default function Game({ name, mainEl }) {
  useEffect(() => {
    playGame(name, mainEl);
  }, [name, mainEl]);

  const handleUp = () => {
    const right = new KeyboardEvent("keydown", { key: "ArrowUp" });
    window.dispatchEvent(right);
  };

  const handleLeft = () => {
    const right = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    window.dispatchEvent(right);
  };

  const handleRight = () => {
    const right = new KeyboardEvent("keydown", { key: "ArrowRight" });
    window.dispatchEvent(right);
  };

  const handleDown = () => {
    const right = new KeyboardEvent("keydown", { key: "ArrowDown" });
    window.dispatchEvent(right);
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
        <button onClick={handleUp}>Up</button>
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
        <button onClick={handleDown}>Down</button>
      </div>
    </div>
  );
}

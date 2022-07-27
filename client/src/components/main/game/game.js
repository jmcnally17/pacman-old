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
      <div className="dpad">
        <img
          src="./images/dpad.png"
          alt="dpad"
          useMap="#dpad"
          height="200px"
          width="200px"
        ></img>
        <map name="dpad">
          <area
            className="up"
            shape="rect"
            coords="66,0,133,66"
            alt="up"
            onClick={() => handleDirection("ArrowUp")}
          ></area>
          <area
            className="left"
            shape="rect"
            coords="0,66,66,133"
            alt="left"
            onClick={() => handleDirection("ArrowLeft")}
          ></area>
          <area
            className="right"
            shape="rect"
            coords="133,66,200,133"
            alt="right"
            onClick={() => handleDirection("ArrowRight")}
          ></area>
          <area
            className="down"
            shape="rect"
            coords="66,133,133,200"
            alt="down"
            onClick={() => handleDirection("ArrowDown")}
          ></area>
        </map>
      </div>
    </div>
  );
}

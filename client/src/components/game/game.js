import React, { useEffect } from "react";
import "./game.css";
import playGame from "./mechanics/playGame";

export default function Game({ name, reactRoot, callback = playGame }) {
  useEffect(() => {
    callback(name, reactRoot);
  }, [callback, name, reactRoot]);

  const handleDirection = (direction) => {
    const arrow = new KeyboardEvent("keydown", { key: direction });
    window.dispatchEvent(arrow);
  };

  return (
    <div>
      <h1>Let&apos;s Play {name}!</h1>
      <div className="table">
        <div className="game-info">
          <div className="score" id="score"></div>
          <div className="level" id="level"></div>
          <div className="lives" id="lives"></div>
        </div>
      </div>
      <canvas
        id="board"
        className="board"
        data-testid="board"
        width="896"
        height="992"
      ></canvas>
      <br></br>
      <div className="dpad">
        <img
          src="./images/dpad.png"
          alt="dpad"
          useMap="#dpad"
          height="200px"
          width="200px"
        ></img>
        <map name="dpad" data-testid="dpad-map">
          <area
            className="up"
            data-testid="up"
            shape="rect"
            coords="66,0,133,66"
            alt="up"
            onClick={() => handleDirection("ArrowUp")}
          ></area>
          <area
            className="left"
            data-testid="left"
            shape="rect"
            coords="0,66,66,133"
            alt="left"
            onClick={() => handleDirection("ArrowLeft")}
          ></area>
          <area
            className="right"
            data-testid="right"
            shape="rect"
            coords="133,66,200,133"
            alt="right"
            onClick={() => handleDirection("ArrowRight")}
          ></area>
          <area
            className="down"
            data-testid="down"
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

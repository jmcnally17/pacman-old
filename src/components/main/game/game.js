import React, { useEffect } from "react";
import "./game.css";
import makeBoard from "./scripts/makeBoard";

export default function Game() {
  useEffect(() => {
    makeBoard();
  }, []);

  return (
    <div>
      <h1>Let&apos;s Play!</h1>
      <p className="score" id="score"></p>
      <canvas id="board" className="board" width="440" height="520"></canvas>
    </div>
  );
}
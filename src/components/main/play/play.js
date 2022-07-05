import React, { useEffect } from "react";
import "./play.css";
import makeCanvas from "./scripts/makeCanvas";
import move from "./scripts/move";

export default function Play() {
  useEffect(() => {
    makeCanvas();
  }, []);

  useEffect(() => {
    move();
  }, []);

  return (
    <div>
      <h1>Let&apos;s Play!</h1>
      <canvas id="board" className="board" width="440" height="520"></canvas>
    </div>
  );
}

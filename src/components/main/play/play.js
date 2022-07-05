import React, { useEffect } from "react";
import "./play.css";
import makeCanvas from "./scripts/makeCanvas";

export default function Play() {
  useEffect(() => {
    makeCanvas();
  }, []);

  return (
    <div>
      <h1>Let&apos;s Play!</h1>
      <canvas id="board" className="board" width="440" height="520"></canvas>
    </div>
  );
}

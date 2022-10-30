export default function loadPauseText(ctx) {
  ctx.globalAlpha = 1;
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Paused", 448, 500);
}

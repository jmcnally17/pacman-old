export default function displayLives(ctx, variables) {
  ctx.beginPath();
  const tileLength = 20;
  const x = 600 - 10 - tileLength / 2;
  const y = 15;
  ctx.arc(x, y, (tileLength * 6) / 8, Math.PI / 4, (Math.PI * 7) / 4);
  ctx.lineTo(x - tileLength / 4, y);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

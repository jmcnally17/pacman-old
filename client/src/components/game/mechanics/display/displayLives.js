export default function displayLives(ctx, variables) {
  ctx.beginPath();
  const x = 600 - 10 - variables.tileLength / 2;
  const y = 15;
  ctx.arc(x, y, (variables.tileLength * 3) / 8, Math.PI / 4, (Math.PI * 3) / 2);
  ctx.lineTo(x - variables.tileLength / 4, y);
  ctx.fillStyle = "yellow";
}

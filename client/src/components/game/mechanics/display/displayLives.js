export default function displayLives(ctx, variables) {
  ctx.beginPath();
  const x = 600 - 10 - variables.tileLength / 2;
  ctx.arc(
    x,
    15,
    (variables.tileLength * 3) / 8,
    Math.PI / 4,
    (Math.PI * 3) / 2
  );
  ctx.fillStyle = "yellow";
}

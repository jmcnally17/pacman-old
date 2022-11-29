import drawPacmanIcon from "./drawPacmanIcon";

export default function displayLives(
  ctx,
  variables,
  callback = drawPacmanIcon
) {
  callback(ctx, {
    x: 580,
    y: 15,
  });
  callback(ctx, {
    x: 540,
    y: 15,
  });
}

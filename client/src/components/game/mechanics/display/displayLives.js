import drawPacmanIcon from "./drawPacmanIcon";

export default function displayLives(
  ctx,
  variables,
  callback = drawPacmanIcon
) {
  callback(ctx);
}

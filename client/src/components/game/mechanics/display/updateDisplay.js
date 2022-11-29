import displayLevel from "./displayLevel";
import displayScore from "./displayScore";

export default function updateDisplay(
  variables,
  callbackOne = displayScore,
  callbackTwo = displayLevel
) {
  const info = document.querySelector("#info");
  const ctx = info.getContext("2d");
  ctx.clearRect(0, 0, info.width, info.height);
  ctx.font = "20px microN56";
  ctx.textBaseline = "middle";

  ctx.fillStyle = "red"; // DELETE!!!!!!!!
  ctx.fillRect(0, 0, info.width, info.height); // DELETE!!!!!!!!

  callbackOne(ctx, variables);
  callbackTwo(ctx, variables);
}

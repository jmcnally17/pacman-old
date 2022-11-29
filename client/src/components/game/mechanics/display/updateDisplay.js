import displayLevel from "./displayLevel";
import displayScore from "./displayScore";

export default function updateDisplay(
  variables,
  callbackOne = displayLevel,
  callbackTwo = displayScore
) {
  const info = document.querySelector("#info");
  const ctx = info.getContext("2d");
  ctx.clearRect(0, 0, info.width, info.height);
  callbackOne(ctx, variables);
  callbackTwo(ctx, variables);
}

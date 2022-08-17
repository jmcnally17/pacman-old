import displayLevel from "./displayLevel";
import displayLives from "./displayLives";
import displayScore from "./displayScore";

export default function updateDisplay(
  pacman,
  variables,
  callbackOne = displayLevel,
  callbackTwo = displayLives,
  callbackThree = displayScore
) {
  callbackOne(variables);
  callbackTwo(pacman);
  callbackThree(variables);
}

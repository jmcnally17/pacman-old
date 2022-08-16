import displayLevel from "./display/displayLevel";
import displayLives from "./display/displayLives";
import displayScore from "./display/displayScore";

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

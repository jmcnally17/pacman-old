import displayLevel from "./displayLevel";
import displayScore from "./displayScore";

export default function updateDisplay(
  variables,
  callbackOne = displayLevel,
  callbackTwo = displayScore
) {
  callbackOne(variables);
  callbackTwo(variables);
}

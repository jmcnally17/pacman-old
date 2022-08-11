import implementTunnel from "../implementTunnel";
import checkPacmanEating from "./checkPacmanEating";
import changeDirection from "./movement/changeDirection";
import makeMove from "./movement/makeMove";

export default function implementPacman(
  variables,
  pacman,
  boundaries,
  ctx,
  pellets,
  callbackOne = makeMove,
  callbackTwo = changeDirection,
  callbackThree = checkPacmanEating,
  callbackFour = implementTunnel
) {
  callbackOne(variables);
  callbackTwo(variables, pacman, boundaries);
  callbackThree(pellets, pacman);
  pacman.update(ctx);
  callbackFour(pacman, variables.length);
}

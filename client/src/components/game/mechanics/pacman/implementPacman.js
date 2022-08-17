import implementTunnel from "../boundaries/implementTunnel";
import checkPacmanEating from "./checkPacmanEating";
import changeDirection from "./movement/changeDirection";

export default function implementPacman(
  variables,
  pacman,
  boundaries,
  ctx,
  pellets,
  callbackOne = changeDirection,
  callbackTwo = checkPacmanEating,
  callbackThree = implementTunnel
) {
  callbackOne(variables, pacman, boundaries);
  callbackTwo(pellets, pacman);
  pacman.update(ctx);
  callbackThree(pacman, variables);
}

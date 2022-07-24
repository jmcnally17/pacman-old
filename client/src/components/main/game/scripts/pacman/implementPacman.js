import implementTunnel from "../implementTunnel";
import changeDirection from "./movement/changeDirection";
import makeMove from "./movement/makeMove";

export default function implementPacman(
  lastKeyPressed,
  pacman,
  boundaries,
  ctx,
  callbackOne = makeMove,
  callbackTwo = changeDirection,
  callbackThree = implementTunnel
) {
  callbackOne(lastKeyPressed);
  callbackTwo(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
  callbackThree(pacman);
}

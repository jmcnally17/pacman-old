import implementTunnel from "../implementTunnel";
import changeDirection from "./movement/changeDirection";
import makeMove from "./movement/makeMove";

export default function implementPacman(
  lastKeyPressed,
  pacman,
  boundaries,
  ctx
) {
  makeMove(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
  implementTunnel(pacman);
}

/* eslint-disable no-undef */
const changeDirection = require("./changeDirection");
const makeMove = require("./makeMove");

const implementPacman = (
  lastKeyPressed,
  pacman,
  boundaries,
  ctx,
  animationId,
  score
) => {
  if (pacman.lives <= 0) {
    cancelAnimationFrame(animationId);
    console.log(`Game Over!\nYou scored ${score.points} points.`);
  }
  makeMove(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
};

module.exports = implementPacman;

/* eslint-disable no-undef */
const changeDirection = require("./changeDirection");
const makeMove = require("./makeMove");

const implementPacman = (lastKeyPressed, pacman, boundaries, ctx) => {
  makeMove(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
};

module.exports = implementPacman;

/* eslint-disable no-undef */
const changeDirection = require("./movement/changeDirection");
const makeMove = require("./movement/makeMove");

const implementPacman = (lastKeyPressed, pacman, boundaries, ctx) => {
  makeMove(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
};

module.exports = implementPacman;

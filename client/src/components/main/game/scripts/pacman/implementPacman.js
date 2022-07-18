const implementTunnel = require("../implementTunnel");
const changeDirection = require("./movement/changeDirection");
const makeMove = require("./movement/makeMove");

const implementPacman = (lastKeyPressed, pacman, boundaries, ctx) => {
  makeMove(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
  implementTunnel(pacman);
};

module.exports = implementPacman;

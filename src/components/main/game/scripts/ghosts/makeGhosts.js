/* eslint-disable no-undef */
const Ghost = require("../../models/ghost");

const makeGhosts = () => {
  const ghosts = [
    new Ghost({
      position: {
        x: 380,
        y: 60,
      },
      velocity: {
        x: 0,
        y: Ghost.speed,
      },
      colour: "red",
    }),
    new Ghost({
      position: {
        x: 60,
        y: 460,
      },
      velocity: {
        x: 0,
        y: -Ghost.speed,
      },
      colour: "pink",
    }),
    new Ghost({
      position: {
        x: 380,
        y: 460,
      },
      velocity: {
        x: -Ghost.speed,
        y: 0,
      },
      colour: "cyan",
    }),
  ];
  return ghosts;
};

module.exports = makeGhosts;

/* eslint-disable no-undef */
const Ghost = require("../../models/ghost");

const makeGhosts = () => {
  const ghosts = [
    new Ghost({
      position: {
        x: 250,
        y: 230,
      },
      velocity: {
        x: 0,
        y: -Ghost.speed,
      },
      colour: "red",
    }),
    new Ghost({
      position: {
        x: 310,
        y: 230,
      },
      velocity: {
        x: 0,
        y: -Ghost.speed,
      },
      colour: "pink",
    }),
    new Ghost({
      position: {
        x: 190,
        y: 290,
      },
      velocity: {
        x: -Ghost.speed,
        y: 0,
      },
      colour: "cyan",
    }),
    new Ghost({
      position: {
        x: 370,
        y: 290,
      },
      velocity: {
        x: Ghost.speed,
        y: 0,
      },
      colour: "orange",
    }),
  ];
  return ghosts;
};

module.exports = makeGhosts;

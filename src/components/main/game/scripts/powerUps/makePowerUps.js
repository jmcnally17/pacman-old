/* eslint-disable no-undef */
const PowerUp = require("../../models/powerUp");

const makePowerUps = (map, length) => {
  const powerUps = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "o") {
        const powerUp = new PowerUp({
          position: {
            x: (length * (2 * j + 1)) / 2,
            y: (length * (2 * i + 1)) / 2,
          },
        });
        powerUps.push(powerUp);
      }
    });
  });
  return powerUps;
};

module.exports = makePowerUps;

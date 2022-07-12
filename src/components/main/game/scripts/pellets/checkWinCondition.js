/* eslint-disable no-undef */
const checkWinCondition = (pellets, score) => {
  let count = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      count++;
    }
    if (count === pellets.length) {
      window.alert(
        `Congratulations, you win!\nYou scored ${score.points} points!`
      );
    }
  });
};

module.exports = checkWinCondition;

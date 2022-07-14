/* eslint-disable no-undef */
const checkWinCondition = (pellets, score, animationId) => {
  let count = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      count++;
    }
    if (count === pellets.length) {
      cancelAnimationFrame(animationId);
      console.log(
        `Congratulations, you win!\nYou scored ${score.points} points!`
      );
    }
  });
};

module.exports = checkWinCondition;

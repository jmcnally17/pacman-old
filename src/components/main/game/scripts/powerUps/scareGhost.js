/* eslint-disable no-undef */
const scareGhost = (ghost) => {
  ghost.changeScaredState();
  setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
};

module.exports = scareGhost;

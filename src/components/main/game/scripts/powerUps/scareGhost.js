/* eslint-disable no-undef */
const scareGhost = (ghost) => {
  ghost.changeScaredState();
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
};

module.exports = scareGhost;

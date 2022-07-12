/* eslint-disable no-undef */
const displayScore = (score) => {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = `Score: ${score.points}`;
};

module.exports = displayScore;

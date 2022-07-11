/* eslint-disable no-undef */
const trackScore = (score) => {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = `Score: ${score}`;
};

module.exports = trackScore;

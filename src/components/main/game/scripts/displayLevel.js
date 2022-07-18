/* eslint-disable no-undef */
const displayLevel = (level) => {
  const levelEl = document.querySelector("#level");
  levelEl.innerText = `Level: ${level.number}`;
};

module.exports = displayLevel;

/* eslint-disable no-undef */
const makeMove = (lastKeyPressed) => {
  window.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowUp") {
      lastKeyPressed.key = "up";
    } else if (key === "ArrowLeft") {
      lastKeyPressed.key = "left";
    } else if (key === "ArrowRight") {
      lastKeyPressed.key = "right";
    } else if (key === "ArrowDown") {
      lastKeyPressed.key = "down";
    }
  });
};

module.exports = makeMove;

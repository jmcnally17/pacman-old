/* eslint-disable indent */
/* eslint-disable no-undef */
const move = (lastKeyPressed) => {
  window.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "ArrowUp":
        lastKeyPressed.key = "up";
        break;
      case "ArrowLeft":
        lastKeyPressed.key = "left";
        break;
      case "ArrowRight":
        lastKeyPressed.key = "right";
        break;
      case "ArrowDown":
        lastKeyPressed.key = "down";
    }
  });
};

module.exports = move;

/* eslint-disable indent */
/* eslint-disable no-undef */
const move = (pacman) => {
  window.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "ArrowUp":
        pacman.velocity.y = -5;
        pacman.velocity.x = 0;
        break;
      case "ArrowLeft":
        pacman.velocity.x = -5;
        pacman.velocity.y = 0;
        break;
      case "ArrowRight":
        pacman.velocity.x = 5;
        pacman.velocity.y = 0;
        break;
      case "ArrowDown":
        pacman.velocity.y = 5;
        pacman.velocity.x = 0;
    }
  });
};

module.exports = move;

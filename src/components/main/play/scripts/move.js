/* eslint-disable no-undef */
const move = () => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      console.log("up is registering");
    } else if (event.key === "ArrowLeft") {
      console.log("left is registering");
    } else if (event.key === "ArrowRight") {
      console.log("right is registering");
    } else if (event.key === "ArrowDown") {
      console.log("down is registering");
    }
  });
};

module.exports = move;

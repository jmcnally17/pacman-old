export default function addDirectionDetection(variables) {
  return window.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowUp") {
      variables.lastKeyPressed = "up";
    } else if (key === "ArrowLeft") {
      variables.lastKeyPressed = "left";
    } else if (key === "ArrowRight") {
      variables.lastKeyPressed = "right";
    } else if (key === "ArrowDown") {
      variables.lastKeyPressed = "down";
    }
  });
}

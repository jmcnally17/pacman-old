export default function addPauseDetection(variables) {
  window.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {
      if (key === "Escape") {
        if (!variables.isGamePaused) {
          variables.isGamePaused = true;
        } else {
          variables.isGamePaused = false;
        }
      }
    })
  );
}

export default function addPauseDetection(variables) {
  window.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {
      if (key === "Escape") {
        variables.isGamePaused = true;
      }
    })
  );
}

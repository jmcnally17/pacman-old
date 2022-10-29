export default function addPauseDetection(variables) {
  document.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {})
  );
}

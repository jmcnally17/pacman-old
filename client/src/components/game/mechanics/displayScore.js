export default function displayScore(variables) {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = `Score: ${variables.score}`;
}

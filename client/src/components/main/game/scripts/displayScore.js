export default function displayScore(score) {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = `Score: ${score.points}`;
}

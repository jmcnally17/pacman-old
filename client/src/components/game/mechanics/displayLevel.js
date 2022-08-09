export default function displayLevel(level) {
  const levelEl = document.querySelector("#level");
  levelEl.innerText = `Level: ${level.number}`;
}

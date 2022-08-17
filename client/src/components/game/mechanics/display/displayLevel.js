export default function displayLevel(variables) {
  const levelEl = document.querySelector("#level");
  levelEl.innerText = `Level: ${variables.level}`;
}

export default function displayLives(pacman) {
  const livesEl = document.querySelector("#lives");
  livesEl.innerText = `Lives: ${pacman.lives}`;
}

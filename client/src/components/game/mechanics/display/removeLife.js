export default function removeLife(pacman) {
  if (pacman.lives === 1) {
    const lifeOneEl = document.querySelector("#life-one");
    lifeOneEl.remove();
  } else {
    const lifeTwoEl = document.querySelector("#life-two");
    lifeTwoEl.remove();
  }
}

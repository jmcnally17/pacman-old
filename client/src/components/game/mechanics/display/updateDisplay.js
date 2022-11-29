export default function updateDisplay() {
  const info = document.querySelector("#info");
  const ctx = info.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, info.width, info.height);
}

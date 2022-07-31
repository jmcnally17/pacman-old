export default function startHuntingInterval(ghosts) {
  ghosts.forEach((ghost) => {
    setInterval(() => ghost.changeHuntingState(), 10000);
  });
}

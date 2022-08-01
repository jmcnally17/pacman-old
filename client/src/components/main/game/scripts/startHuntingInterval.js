export default function startHuntingInterval(ghosts) {
  ghosts.forEach((ghost) => {
    ghost.huntingInterval = setInterval(
      () => ghost.changeHuntingState(),
      10000
    );
  });
}

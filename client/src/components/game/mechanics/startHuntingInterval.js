export default function startHuntingInterval(ghosts, count, huntingTimeout) {
  if (count.number === 0) {
    huntingTimeout.timeout = setTimeout(() => {
      ghosts.forEach((ghost) => {
        ghost.changeHuntingState();
      });
      startHuntingInterval(ghosts, count, huntingTimeout);
    }, 7000);
    count.number++;
  } else if (count.number === 1) {
    huntingTimeout.timeout = setTimeout(() => {
      ghosts.forEach((ghost) => {
        ghost.changeHuntingState();
      });
      startHuntingInterval(ghosts, count, huntingTimeout);
    }, 20000);
    count.number--;
  }
}

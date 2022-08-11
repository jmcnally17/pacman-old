export default function startHuntingCycle(ghosts, count, huntingTimeout) {
  huntingTimeout.timeout = setTimeout(
    () => {
      ghosts.forEach((ghost) => {
        ghost.changeHuntingState();
      });
      startHuntingCycle(ghosts, count, huntingTimeout);
    },
    count.number === 0 ? 7000 : 20000
  );
  count.number === 0 ? count.number++ : count.number--;
}

export default function startHuntingInterval(ghosts, count, huntingTimeout) {
  huntingTimeout.timeout = setTimeout(
    () => {
      ghosts.forEach((ghost) => {
        ghost.changeHuntingState();
      });
      startHuntingInterval(ghosts, count, huntingTimeout);
    },
    count.number === 0 ? 7000 : 20000
  );
  count.number === 0 ? count.number++ : count.number--;
}

export default class CycleTimer {
  constructor() {
    this.timeout = null;
    this.count = 0;
  }

  start(ghosts) {
    this.timeout = setTimeout(
      () => {
        ghosts.forEach((ghost) => {
          ghost.changeHuntingState();
        });
        this.start(ghosts);
      },
      this.count === 0 ? 7000 : 20000
    );
    this.count === 0 ? this.count++ : this.count--;
  }
}

export default class CycleTimer {
  constructor() {
    this.timeout = null;
    this.count = 0;
    this.startTime = null;
  }

  start(ghosts, dateNow = Date.now()) {
    this.startTime = dateNow;
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

  reset() {
    clearTimeout(this.timeout);
    this.count = 0;
  }
}

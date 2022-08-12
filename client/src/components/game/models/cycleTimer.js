export default class CycleTimer {
  constructor(ghosts) {
    this.timeout = null;
    this.count = 0;
    this.startTime = null;
    this.timeRemaining = null;
    this.ghosts = ghosts;
  }

  start(dateNow = Date.now()) {
    this.startTime = dateNow;
    this.timeout = setTimeout(
      () => {
        this.#switchHuntScatterState();
      },
      this.count === 0 ? 7000 : 20000
    );
    this.count === 0 ? this.count++ : this.count--;
  }

  pause(dateNow = Date.now()) {
    const now = dateNow;
    const timeElapsed = now - this.startTime;
    this.count === 0
      ? (this.timeRemaining = 20000 - timeElapsed)
      : (this.timeRemaining = 7000 - timeElapsed);
    clearTimeout(this.timeout);
  }

  resume() {
    this.timeout = setTimeout(() => {
      this.#switchHuntScatterState();
    }, this.timeRemaining);
  }

  reset() {
    clearTimeout(this.timeout);
    this.count = 0;
  }

  private;

  #switchHuntScatterState() {
    this.ghosts.forEach((ghost) => {
      ghost.changeHuntingState();
    });
    this.#carryOnCycle();
  }

  #carryOnCycle() {
    this.start();
  }
}

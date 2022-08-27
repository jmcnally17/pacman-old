export default class CycleTimer {
  constructor(ghosts) {
    this.timeout = null;
    this.ghosts = ghosts;
    this.count = 0;
    this.startTime = null;
    this.timeRemaining = null;
    this.isRunning = false;
  }

  start(dateNow = Date.now()) {
    this.startTime = dateNow;
    this.timeout = setTimeout(
      () => {
        this.#switchChaseScatterState();
      },
      this.count === 0 ? 7000 : 20000
    );
    this.count === 0 ? this.count++ : this.count--;
    this.isRunning = true;
  }

  pause(dateNow = Date.now()) {
    clearTimeout(this.timeout);
    const timeElapsed = dateNow - this.startTime;
    this.count === 0
      ? (this.timeRemaining = 20000 - timeElapsed)
      : (this.timeRemaining = 7000 - timeElapsed);
    this.isRunning = false;
  }

  resume() {
    this.timeout = setTimeout(() => {
      this.#switchChaseScatterState();
    }, this.timeRemaining);
    this.isRunning = true;
  }

  reset() {
    clearTimeout(this.timeout);
    this.count = 0;
    this.isRunning = false;
  }

  // private

  #switchChaseScatterState() {
    this.ghosts.forEach((ghost) => {
      ghost.changeChasingState();
    });
    this.#carryOnCycle();
  }

  #carryOnCycle() {
    this.start();
  }
}

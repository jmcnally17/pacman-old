export default class ScaredTimer {
  constructor(ghosts) {
    this.timeout = null;
    this.ghosts = ghosts;
    this.startTime = null;
    this.timeRemaining = null;
  }

  start(cycleTimer, dateNow = Date.now()) {
    this.startTime = dateNow;
    this.timeout = setTimeout(() => {
      this.ghosts.forEach((ghost) => {
        if (ghost.isScared) ghost.changeScaredState();
      });
      cycleTimer.resume();
    }, 5000);
  }

  pause(dateNow = Date.now()) {
    clearTimeout(this.timeout);
    const timeElapsed = dateNow - this.startTime;
    this.timeRemaining = 5000 - timeElapsed;
  }

  resume(cycleTimer) {
    this.timeout = setTimeout(() => {
      this.ghosts.forEach((ghost) => {
        if (ghost.isScared) ghost.changeScaredState();
      });
      cycleTimer.resume();
    }, this.timeRemaining);
  }

  reset() {
    clearTimeout(this.timeout);
  }
}

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

  reset() {
    clearTimeout(this.timeout);
  }
}

export default class RetreatingTimer {
  constructor(ghost) {
    this.timeout = null;
    this.ghost = ghost;
    this.startTime = null;
    this.timeRemaining = null;
  }

  start(dateNow = Date.now()) {
    this.startTime = dateNow;
    this.timeout = setTimeout(() => this.ghost.changeRetreatingState(), 3000);
  }

  pause(dateNow = Date.now()) {
    clearTimeout(this.timeout);
    const timeElapsed = dateNow - this.startTime;
    this.timeRemaining = 3000 - timeElapsed;
  }

  resume() {
    this.timeout = setTimeout(
      () => this.ghost.changeRetreatingState(),
      this.timeRemaining
    );
  }

  reset() {
    clearTimeout(this.timeout);
  }
}

export default class RetreatingTimer {
  constructor(ghost) {
    this.timeout = null;
    this.ghost = ghost;
    this.startTime = null;
    this.timeRemaining = null;
  }

  start() {
    this.timeout = setTimeout(() => this.ghost.changeRetreatingState(), 3000);
  }

  reset() {
    clearTimeout(this.timeout);
  }
}

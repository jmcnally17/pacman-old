export default class RetreatingTimer {
  constructor(ghost) {
    this.timeout = null;
    this.ghost = ghost;
  }

  start() {
    this.timeout = setTimeout(() => this.ghost.changeRetreatingState(), 3000);
  }
}

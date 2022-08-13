export default class ScaredTimer {
  constructor(ghosts) {
    this.timeout = null;
    this.ghosts = ghosts;
  }

  start() {
    this.timeout = setTimeout(() => {
      this.ghosts.forEach((ghost) => {
        if (ghost.isScared) ghost.changeScaredState();
      });
    }, 5000);
  }

  clear() {
    clearTimeout(this.timeout);
  }
}

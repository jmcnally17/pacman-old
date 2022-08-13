export default class ScaredTimer {
  constructor(ghosts) {
    this.timeout = null;
    this.ghosts = ghosts;
  }

  start() {
    this.timeout = setTimeout(() => {
      this.ghosts.forEach((ghost) => ghost.changeScaredState());
    }, 5000);
  }
}

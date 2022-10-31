export default class AudioPlayer {
  constructor(ghostSiren, ghostScared, ghostRetreating, pacmanDeath, levelUp) {
    this.ghostSiren = ghostSiren;
    this.ghostScared = ghostScared;
    this.ghostRetreating = ghostRetreating;
    this.pacmanDeath = pacmanDeath;
    this.levelUp = levelUp;
  }

  playGhostSiren() {
    this.ghostScared.pause();
    this.ghostRetreating.pause();
    this.ghostSiren.play();
  }

  playGhostScared() {
    this.ghostSiren.pause();
    this.ghostRetreating.pause();
    this.ghostScared.play();
  }

  playGhostRetreating() {
    this.ghostSiren.pause();
    this.ghostScared.pause();
    this.ghostRetreating.play();
  }
}

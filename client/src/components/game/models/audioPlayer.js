export default class AudioPlayer {
  constructor(ghostSiren, ghostScared, ghostRetreating, pacmanDeath, levelUp) {
    this.ghostSiren = ghostSiren;
    this.ghostScared = ghostScared;
    this.ghostRetreating = ghostRetreating;
    this.pacmanDeath = pacmanDeath;
    this.levelUp = levelUp;
  }

  playSiren() {
    this.ghostScared.pause();
    this.ghostRetreating.pause();
    this.ghostSiren.play();
  }
}

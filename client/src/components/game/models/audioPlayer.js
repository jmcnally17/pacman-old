export default class AudioPlayer {
  constructor(ghostSiren, ghostScared, ghostRetreating, pacmanDeath, levelUp) {
    this.ghostSiren = ghostSiren;
    this.ghostScared = ghostScared;
    this.ghostRetreating = ghostRetreating;
    this.pacmanDeath = pacmanDeath;
    this.levelUp = levelUp;
  }

  loadGhost() {
    this.ghostSiren.load();
    this.ghostScared.load();
    this.ghostRetreating.load();
  }

  unloadGhost() {
    this.ghostSiren.unload();
    this.ghostScared.unload();
    this.ghostRetreating.unload();
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

  loadAndPlayPacmanDeath() {
    this.pacmanDeath.load();
    this.#playPacmanDeath();
  }

  unloadPacmanDeath() {
    this.pacmanDeath.unload();
  }

  loadAndPlayLevelUp() {
    this.levelUp.load();
    this.#playLevelUp();
  }

  unloadLevelUp() {
    this.levelUp.unload();
  }

  playPacmanDeathAndLevelUpIfLoaded() {
    if (this.pacmanDeath._state === "loaded") this.#playPacmanDeath();
    if (this.levelUp._state === "loaded") this.#playLevelUp();
  }

  pauseAll() {
    this.ghostSiren.pause();
    this.ghostScared.pause();
    this.ghostRetreating.pause();
    this.pacmanDeath.pause();
    this.levelUp.pause();
  }

  // private

  #playPacmanDeath() {
    this.pacmanDeath.play();
  }

  #playLevelUp() {
    this.levelUp.play();
  }
}

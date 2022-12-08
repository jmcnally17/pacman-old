import { Howl } from "howler";

export default class AudioPlayer {
  constructor(
    ghostSiren = new Howl({
      src: "./audio/siren.wav",
      loop: true,
      volume: 0.1,
    }),
    ghostScared = new Howl({
      src: "./audio/scared.wav",
      loop: true,
      volume: 0.08,
    }),
    ghostRetreating = new Howl({
      src: "./audio/retreating.wav",
      loop: true,
      volume: 0.1,
    }),
    pacmanDeath = new Howl({
      src: "./audio/pacman_death.wav",
      volume: 0.3,
    }),
    levelUp = new Howl({
      src: "./audio/level_up.wav",
      volume: 0.2,
    })
  ) {
    this.ghostSiren = ghostSiren;
    this.ghostScared = ghostScared;
    this.ghostRetreating = ghostRetreating;
    this.pacmanDeath = pacmanDeath;
    this.pacmanDeath.wantsToPlay = false;
    this.levelUp = levelUp;
    this.levelUp.wantsToPlay = false;
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

  playPacmanDeath() {
    this.pacmanDeath.play();
    this.pacmanDeath.wantsToPlay = true;
  }

  playLevelUp() {
    this.levelUp.play();
    this.levelUp.wantsToPlay = true;
  }

  playPacmanDeathAndLevelUpIfWantTo() {
    if (this.pacmanDeath.wantsToPlay === true) this.pacmanDeath.play();
    if (this.levelUp.wantsToPlay === true) this.levelUp.play();
  }

  pauseAll() {
    this.ghostSiren.pause();
    this.ghostScared.pause();
    this.ghostRetreating.pause();
    this.pacmanDeath.pause();
    this.levelUp.pause();
  }
}

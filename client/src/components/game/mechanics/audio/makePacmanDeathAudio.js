import { Howl } from "howler";

export default function makePacmanDeathAudio() {
  return new Howl({
    src: "./audio/pacmanDeath.wav",
    volume: 0.3,
  });
}
import { Howl } from "howler";

export default function makeLevelUpAudio() {
  return new Howl({
    src: "./audio/levelUp.wav",
    volume: 0.5,
  });
}

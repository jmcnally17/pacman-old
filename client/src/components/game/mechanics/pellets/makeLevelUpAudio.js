import { Howl } from "howler";

export default function makeLevelUpAudio() {
  return new Howl({
    src: "./audio/levelUp.wav",
  });
}

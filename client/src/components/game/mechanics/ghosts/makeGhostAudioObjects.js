import { Howl } from "howler";

export default function makeGhostAudioObjects() {
  const audioObjects = [];
  const siren = new Howl({
    src: "./audio/siren.wav",
    loop: true,
    volume: 0.1,
  });
  const scared = new Howl({
    src: "./audio/scared.wav",
    loop: true,
    volume: 0.1,
  });
  const retreating = new Howl({
    src: "./audio/retreating.wav",
    loop: true,
    volume: 0.1,
  });
  audioObjects.push(siren, scared, retreating);
  return audioObjects;
}

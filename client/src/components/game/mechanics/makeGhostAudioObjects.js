import { Howl } from "howler";

export default function makeGhostAudioObjects() {
  const audioObjects = [];
  const siren = new Howl({
    src: "./audio/siren.wav",
    loop: true,
    volume: 0.5,
  });
  audioObjects.push(siren);
  return audioObjects;
}

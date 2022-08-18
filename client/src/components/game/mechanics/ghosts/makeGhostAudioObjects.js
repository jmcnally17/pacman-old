import { Howl } from "howler";

export default function makeGhostAudioObjects() {
  const audioObjects = [];
  const siren = new Howl({
    src: "./audio/siren.wav",
    loop: true,
  });
  const scared = new Howl({
    src: "./audio/scared.wav",
    loop: true,
  });
  audioObjects.push(siren, scared);
  return audioObjects;
}

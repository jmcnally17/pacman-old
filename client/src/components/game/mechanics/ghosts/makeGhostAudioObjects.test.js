import makeGhostAudioObjects from "./makeGhostAudioObjects";
import { Howl } from "howler";

describe("makeGhostAudioObjects", () => {
  it("creates the audio objects and returns them in an array", () => {
    const audioObjects = makeGhostAudioObjects();
    expect(audioObjects.length).toBe(1);
    expect(audioObjects[0]).toBeInstanceOf(Howl);
  });
});

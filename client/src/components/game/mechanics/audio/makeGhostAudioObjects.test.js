import makeGhostAudioObjects from "./makeGhostAudioObjects";
import { Howl } from "howler";

jest.mock("howler");

describe("makeGhostAudioObjects", () => {
  it("creates the audio objects and returns them in an array", () => {
    const audioObjects = makeGhostAudioObjects();
    expect(audioObjects.length).toBe(3);
    audioObjects.forEach((object) => expect(object).toBeInstanceOf(Howl));
  });
});

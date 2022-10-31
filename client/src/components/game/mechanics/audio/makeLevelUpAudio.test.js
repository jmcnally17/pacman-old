import { Howl } from "howler";
import makeLevelUpAudio from "./makeLevelUpAudio";

describe("makeLevelUpAudio", () => {
  it("makes the audio object from Howler", () => {
    const levelUpAudio = makeLevelUpAudio();
    expect(levelUpAudio).toBeInstanceOf(Howl);
  });
});
